!function(){var moduleFactory=function($){var module=this;$.require().script("mvc/lang.string").done(function(){var exports=function(){$.String.rsplit=function(string,regex){var result=regex.exec(string),retArr=[],first_idx,last_idx;while(result!==null){first_idx=result.index;last_idx=regex.lastIndex;if(first_idx!==0){retArr.push(string.substring(0,first_idx));string=string.slice(first_idx)}retArr.push(result[0]);string=string.slice(result[0].length);result=regex.exec(string)}if(string!==""){retArr.push(string)}return retArr}};exports();module.resolveWith(exports)})};dispatch("mvc/lang.string.rsplit").containing(moduleFactory).to("Foundry/2.1 Modules")}();