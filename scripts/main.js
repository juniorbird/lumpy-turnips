requirejs.config({
  shim: {
          'testsource': {
              exports: 'ts'
            },
          'test-analysis': {
              exports: 'ta'
            },
          'fs': {
            deps: ['buffer','util','path','constants','stream','events']
          }
  }
});

// console.log(requirejs.config());

require(['fs'], function(fs) {
  console.log(fs);
});
// define(['test-analysis', 'testsource'],
//   function(ta, ts) {
//     console.log('test',testsource);
//     console.log('ta', ta);
//     console.log('---');
//     console.log('ts', ts);
// });
