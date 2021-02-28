import ToDo from "../models/ToDo.js";
var inittest = async () => {
  var ToDo = new ToDo();
  ToDo.createUser(
    "Test1",
    "Test 1 lastname",
    "4/11/12",
    "12",
    "2.3",
 
  );
  ToDo.createUser(
    "Test2",
    "Test 2 lastname",
    "test2@gmail.com",
    "1234",
   
  );
  ToDo.createUser(
    "Test1",
    "Test 2 lastname",
    "test3@gmail.com",
    "1234",
 
  );
  ToDo.createUser(
    "Test1",
    "Test 2 lastname",
    "test4@gmail.com",
    "1234",

  );
  console.log(await ToDo.getUsers());
  //usermodel.deleteUser("60146018e49f7308a951795c");

  //await usermodel.updateModel("60146018e49f7308a951795d", { name: "Ramon" });
  //console.log(await usermodel.getUsers());
};
inittest();
