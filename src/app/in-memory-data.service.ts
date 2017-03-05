import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let members = [
      { id: '101', fName: 'Mr. Abraham', lName: 'Kuriakose', sex: 'M', age: 63 },
      { id: '102', fName: 'Mrs. Susamma', lName: 'Abraham', sex: 'F', age: 60 },
      { id: '103', fName: 'Mr. Christo', lName: 'Abraham', sex: 'M', age: 35 },
      { id: '104', fName: 'Mrs. Jerrin', lName: 'Christo', sex: 'F', age: 30 },
      { id: '105', fName: 'Ms. Emy', lName: 'Susan Christo', sex: 'F', age: 4 },
      { id: '106', fName: 'Ms. Ethan', lName: 'M Christo', sex: 'M', age: 2 },
      { id: '107', fName: 'Mr. Joel', lName: 'Koshy Itty', sex: 'M', age: 39 },
      { id: '108', fName: 'Mrs. Christeena', lName: 'Abraham', sex: 'F', age: 31 },
      { id: '108', fName: 'Ms. Aliza', lName: 'Mary Joel', sex: 'F', age: 6 },
      { id: '110', fName: 'Ms. Julia', lName: 'Susan Joel', sex: 'F', age: 4 }
    ];
    return {members};
  }
}
