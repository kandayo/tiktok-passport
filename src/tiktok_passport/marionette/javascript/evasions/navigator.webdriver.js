// The MIT License (MIT)
//
// Copyright (c) 2019 berstend <github@berstend.com>
// Copyright (c) 2020 diprajpatra
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// 1575f1af2c87949f95de489ebed223864793e0ee
// Mar 14, 2021

(() => {
  if (navigator.webdriver === false) {
    // Post Chrome 89.0.4339.0 and already good
  } else if (navigator.webdriver === undefined) {
    // Pre Chrome 89.0.4339.0 and already good
  } else {
    // Pre Chrome 88.0.4291.0 and needs patching
    delete Object.getPrototypeOf(navigator).webdriver
  }
})()
