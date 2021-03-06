require "../ext/pool"

module TiktokPassport
  class Marionette
    class Pool
      POOL_CAPACITY = ENV.fetch("POOL_CAPACITY", "1").to_i
      POOL_TIMEOUT  = ENV.fetch("POOL_TIMEOUT", "10").to_f

      @pool : ConnectionPool(Marionette::Session)

      def initialize(remote_url = TiktokPassport.config.selenium_browser_url)
        @pool = ConnectionPool.new(capacity: POOL_CAPACITY, timeout: POOL_TIMEOUT) do
          Marionette::Session.new(remote_url)
        end
      end

      def with
        @pool.connection do |session|
          session.start if session.stopped?
          yield(session)
        rescue ex
          session.stop
          raise ex
        end
      end

      def shutdown
        return if @pool.size <= 0

        until @pool.pending == @pool.size
          sleep 0.1
        end

        @pool.each_resource(&.stop)
      end
    end
  end
end
