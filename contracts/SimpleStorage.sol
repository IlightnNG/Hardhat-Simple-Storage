// SPDX-License-Identifier: MIT
pragma solidity >=0.6.12 <0.9.0;

contract SimpleStorage {
    // 1. boolean,uint,int,address,bytes
    int16 public a = 111; // Variable with public is attached with a public view function.

    // string name = "Henry";
    // bytes32 job;

    // 2. function
    function store(int16 _num) public virtual {
        a = _num;
    }

    // 3. view,pure  -read only ,no gas
    //    pure maybe some simple function which do not change the storage.
    function read() public view returns (int16) {
        return a;
    }

    // 4. struct
    struct People {
        string name;
        int8 age;
    }

    People public Tom = People({name: "Hen", age: 11});

    // 5. array
    People[] public people;

    function addPerson(string memory _name, int8 _age) public {
        People memory newPerson = People({name: _name, age: _age});
        people.push(newPerson);
        nameToAge[_name] = _age;
    }

    // 6. calldata -can't change, memory -temporary, storage

    // 7. mapping
    mapping(string => int8) public nameToAge;
}
