/*

 ES6 by default! Using http://babeljs.io

 Our actual application code begins inside of
 server/main.js, but the process should be started
 from this file in order to enable ES6 translation.

 There is no boilerplate ES6 code in our application
 so if you choose not to use any ES6 features, you can
 start your application from main.js.

*/

require('babel-register');
require('./main');

// -general stuff:
//     -keep in mind that console.logs can be great for testing but can get really annoying when you have a lot of them in master from previous feature branches that are already complete, generally a good idea to take them out before submitting a PR (or at least look for them and remove them during code review)
// 	-formatting (especially indenting) will make it much easier to read and edit code
// 	-directives should link to template html files anytime you have more than a few lines: keeps things modular and separates view/rendering logic from business logic
// 	-nice use of resolves in states
// 	-good job pushing business logic (especially API requests) back into factories and keeping controllers lean