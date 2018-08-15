var axios = require('axios')

var appRouter = function(app) {
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

    app.get("/", function(req, res) {
        res.status(200).send("Welcome to our restful API");
      });

    app.post('/insertBankTransaction', async (req, res) => {
        var baseUri = 'http://192.168.56.101:3100/bcsgw/rest/v1/transaction/invocation';
        try {
            console.log(req.body)
            var response = await axios.post(baseUri, req.body);
            console.log(response)
            if(response.data.returnCode !== 'Success'){
                blockchainErrorsToConsole(response);
            }
            res.send(response.data);
        } catch (error) {
            console.log(error);
            res.send('error');
        }
    });

    app.post('/getAllBankTransaction', async (req, res) => {
        var baseUri = 'http://192.168.56.101:3100/bcsgw/rest/v1/transaction/invocation';
        try {
            console.log(req.body)
            var response = await axios.post(baseUri, req.body);
            console.log(response)
            if(response.data.returnCode !== 'Success'){
                blockchainErrorsToConsole(response);
            }
            res.send(response.data);
        } catch (error) {
            console.log(error);
            res.send('error');
        }
    });
}

module.exports = appRouter;