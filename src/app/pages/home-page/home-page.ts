import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { ReputationTable } from '../../components/reputation-table/reputation-table';
import { StatInputs } from '../../components/stat-inputs/stat-inputs';
import { ClubDisplay } from '../../components/club-display/club-display';
import { MainDisplay } from '../../components/main-display/main-display';
import { DisplayMenu } from '../../components/display-menu/display-menu';
import { LeagueSelect } from '../../components/league-select/league-select';

@Component({
  selector: 'app-home-page',
  imports: [Header, Footer, ReputationTable, StatInputs, ClubDisplay, MainDisplay, DisplayMenu, LeagueSelect],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {

}
