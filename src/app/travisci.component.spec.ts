import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TravisciAppComponent } from '../app/travisci.component';

beforeEachProviders(() => [TravisciAppComponent]);

describe('App: Travisci', () => {
  it('should create the app',
      inject([TravisciAppComponent], (app: TravisciAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'travisci works!\'',
      inject([TravisciAppComponent], (app: TravisciAppComponent) => {
    expect(app.title).toEqual('travisci works!');
  }));
});
