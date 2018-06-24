import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const users = [
      { username: 'bala', password: '1234', firstname: 'Bala', lastname: 'Bhaskar' },
      { username: 'viswa', password: '4321', firstname: 'Bala', lastname: 'Bhaskar' }
    ];

    return { users };

  }

}
