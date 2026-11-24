import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CreateRoomComponent } from './features/create-room/create-room.component';
import { JoinRoomComponent } from './features/join-room/join-room.component';
import { PlayerRegistrationComponent } from './features/player-registration/player-registration.component';
import { WaitingLobbyComponent } from './features/waiting-lobby/waiting-lobby.component';
import { GameBoardComponent } from './features/game-board/game-board.component';
import { FinalChampionComponent } from './features/final-champion/final-champion.component';
import { LeaderboardComponent } from './features/leaderboard/leaderboard.component';
import { ProfileComponent } from './features/profile/profile.component';
import { SettingsComponent } from './features/settings/settings.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create-room', component: CreateRoomComponent },
  { path: 'join-room', component: JoinRoomComponent },
  { path: 'registration/:roomId', component: PlayerRegistrationComponent },
  { path: 'lobby/:roomId', component: WaitingLobbyComponent },
  { path: 'game/:roomId', component: GameBoardComponent },
  { path: 'champion/:roomId', component: FinalChampionComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '' },
];
