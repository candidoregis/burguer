USE nytvgl5ltl0jn9rw;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(127) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
