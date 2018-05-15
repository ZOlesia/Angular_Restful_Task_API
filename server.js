require('./server/config/mongoose');
const   xp = require('express');
        app = xp();
        bp = require('body-parser');
        path = require('path');


app.use(bp.json());
app.use(xp.static(path.join( __dirname , './angularp/dist/angularp') ));
require('./server/config/routes.js')(app);
app.listen(5000, function(){
    console.log("Server is running!");
});