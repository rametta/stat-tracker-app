import { Component } from '@angular/core';

import { NewMatchPage } from '../new-match/new-match';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NewMatchPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
