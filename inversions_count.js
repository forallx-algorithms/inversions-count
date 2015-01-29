/*
  Algorithm for counting inversions in an array

  @author Evgeniy Kuznetsov
  @date 30.1.2015 0:42
 */

// @param {Array.<Integer>} a
// @return {Integer} Number of inversions in a given array
function InversionsCount(a){

  // Get split point for a given length of an array
  // @param {Integer} n Length of an array
  var getSplitPoint = function(n){
    return Math.floor(n/2);
  };

  // Count split inversions
  // @param {Array.<Integer>} fpart
  // @param {Array.<Integer>} spart
  // @return {Integer} Number of split inversions
  var countSplit = function(fpart, spart){
    return 0;
  }

  // Main recursion loop
  // @param {Array.<Integer>} a
  // @return {Integer}
  var count = function(a){
    if(a.length<2){
      return 0;
    }else{
      var splitPoint = getSplitPoint(a.length);
      var fpart = count(a.slice(0, splitPoint));
      var spart = count(a.slice(splitPoint, a.length));
      var split = countSplit(fpart, spart);

      return fpart+spart+split;
    }
  };

  return count(a);
}