// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-9-c-i-28
description: >
    Array.prototype.reduceRight applied to String object, which
    implements its own property get method
---*/

        var testResult = false;
        function callbackfn(prevVal, curVal, idx, obj) {
            if (idx === 1) {
                testResult = (curVal === "1");
            }
        }

        var str = new String("012");
        Array.prototype.reduceRight.call(str, callbackfn, "initialValue");

assert(testResult, 'testResult !== true');

reportCompare(0, 0);