// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Greeting {
  string public greeting;
  event GreetingSet(string _newGreeting);
  constructor(string memory _greeting) {
    greeting = _greeting;
  }

  function setGreetings(string memory _greeting) public  {
    greeting = _greeting;
    emit GreetingSet(_greeting);
  }
}