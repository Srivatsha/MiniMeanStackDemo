export class Column{
    id : string;
    name : string;
    width : string;
}

export const Columns: Column[] = [
    { id: 'Id', name: 'Id', width:'20px'},
    { id: 'UserName', name: 'User Name', width:'200px' },
    { id: 'Game', name: 'Game', width:'100px' },
    { id: 'Level', name: 'Level', width:'100px' },
    { id: 'StartTime', name: 'Start Time', width:'100px' },
    { id: 'EndTime', name: 'End Time', width:'100px' },
    { id: 'Score', name: 'Score', width:'80px' },
  ];
