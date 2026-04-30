'use strict';

const groupData = {
  name: 'A',
  numberOfMembers: 0,
  nameMembers: []
};


function addGroupData() {
  groupData.name = prompt(`Enter Group Name`);
  groupData.numberOfMembers = Number(prompt(`Enter Number Of Group:`));
  for (let i = 0; i < groupData.numberOfMembers; i++) {
    groupData.nameMembers[i] = prompt(`Enter Member Name Number${i + 1}`);
  }
  console.log(`GROUP DATA
Name: ${groupData.name}
Members: ${groupData.numberOfMembers}
Member Name: ${groupData.nameMembers.join(', ')}
`);
}//end function

console.log(`START CREATE NEW GROUP`)
addGroupData();