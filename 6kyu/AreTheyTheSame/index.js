function comp(array1, array2){
  if ( !array1 || !array2 ) return false;

  //your code here
  let ary1 = array1;
  if( Array.isArray(ary1) ) {
    ary1 = ary1.map( x => x ** 2 ).sort( (a,b) => a > b ? 1 : -1 );
  }
  let ary2 = array2;
  if( Array.isArray(ary2) ){
    ary2 = ary2.sort( (a,b) => a > b ? 1 : -1 );
  }

  ary1 = JSON.stringify(ary1);
  ary2 = JSON.stringify(ary2);
  if( ary1 === ary2 ){
    return true;
  }
  return false;
};

exports.comp = comp;