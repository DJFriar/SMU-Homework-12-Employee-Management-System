use employee_cms_db;

INSERT INTO department (name)
VALUES 
  ("Sales"),
  ("Engineering"),
  ("Finance"),
  ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES 
  ("Sales Lead", 100000, 1),
  ("Salesperson", 80000, 1),
  ("Lead Engineer", 150000, 2),
  ("Software Engineer", 120000, 2),
  ("Chief Financial Officer", 160000, 3),
  ("Accountant", 125000, 3),
  ("General Counsel", 250000, 4),
  ("Senior Attorney", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
  ("Deirdre", "OBrien", 1, NULL),
  ("Lisa", "McIntosh", 2, 1),
  ("Craig", "Federighi", 3, NULL),
  ("Jessica", "Appleseed", 4, 3),
  ("Luca", "Maestri", 5, NULL),
  ("Johnny", "Appleseed", 6, 5),
  ("Katherine", "Adams", 7, NULL),
  ("Denny", "Crane", 8, 7);
