for(prop in proto={sortMax:function(){return this.getNumber().sort((a,b)=>b-a)},sortMaxLength:function(str){return this.getString().sort((a,b)=>b.length-a.length)},getNumber:function(){return this.filter(e=>"number"==typeof e)},getString:function(){return this.filter(e=>"string"==typeof e)},sortRandom:function(){return this.sort(a=>Math.random()-.5)},getMin:function(number=1){return this.sortMax().reverse().slice(0,number)},getMax:function(number=1){return this.sortMax().slice(0,number)},getRandom:function(number=1){return this.sortRandom().slice(0,number)},count:function(element){return this.filter(e=>e===element).length},countAlt:function(element){return this.filter(e=>e==element).length},indexesOf:function(element){return this.map((_,i)=>i).filter(e=>this[e]===element)},indexesOfAlt:function(element){return this.map((_,i)=>i).filter(e=>this[e]==element)},getTrue:function(){return this.filter(Boolean)},falseCount:function(){return this.filter(e=>!e).length},falsyIndexes:function(){return this.map((_,i)=>i).filter(e=>!this[e])},typeCount:function(type){return this.filter(e=>typeof e===type).length},last:function(){return this.slice(-1)[0]},convertSet:function(){return new Array(...new Set(this))},dublicates:function(){return this.filter((e,i)=>this.indexOf(e)!=i)},dublicatesCount:function(){return this.dublicates().map(e=>({[e]:this.count(e)}))},sum:function(){return this.getNumber().reduce((a,b)=>a+b,0)},bindSum:function(array){return Array.isArray(array)?this.getNumber().map((e,i)=>e+array[i]).getTrue():this},merge:function(array){return Array.isArray(array)?this.concat(array).convertSet():this}},proto)Array.prototype[prop]=proto[prop];