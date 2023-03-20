const home = (req, res) => {
  res.send("This is home");
};

const home_post = (req, res) => {
  //   console.log(req.body);
  //   res.send("Succes");
  res.json(req.body);
};

const calculator_get = (req, res) => {
  let result;
  switch (req.params.operation) {
    case "sobiranje":
      result = Number(req.query.a) + Number(req.query.b);
      break;

    case "odzemanje":
      result = Number(req.query.a) - Number(req.query.b);
      break;
    case "mnozenje":
      result = Number(req.query.a) * Number(req.query.b);
      break;
    case "delenje":
      result = Number(req.query.a) + Number(req.query.b);
      break;
  }
  res.json({
    msg: "Calc done successfully",
    result: result,
  });
};

const calculator_post = (req, res) => {
  switch (req.params.operation) {
    case "sobiranje":
      result = Number(req.body.a) + Number(req.query.b);
      break;

    case "odzemanje":
      result = Number(req.body.a) - Number(req.query.b);
      break;
    case "mnozenje":
      result = Number(req.body.a) * Number(req.query.b);
      break;
    case "delenje":
      result = Number(req.body.a) + Number(req.query.b);
      break;
  }
  res.json({
    msg: "Calc done successfully",
    result: result,
  });
};
module.exports = {
  home,
  home_post,
  calculator_get,
  calculator_post,
};
