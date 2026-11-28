export type RoomVisibility = 'PUBLIC' | 'PRIVATE';

export type RoomStatus =
  | 'WAITING'
  | 'STARTING'
  | 'IN_PROGRESS'
  | 'ROUND_COMPLETED'
  | 'COMPLETED'
  | 'CANCELLED'
  | 'EXPIRED';

export interface PlayerProfile {
  id: string;
  playerName: string;
  avatarUrl: string;
  status: string;
}

export interface PlayerSession {
  token: string;
  player: PlayerProfile;
}

export interface PhysicalCard {
  id: string;
  cardTypeId: string;
  cardName: string;
  cardImageUrl?: string;
  currentOwnerId: string;
  position: number;
}

export interface PublicPlayerInfo {
  id: string;
  name: string;
  avatarUrl: string;
  isHost: boolean;
  isReady: boolean;
  isConnected: boolean;
  submittedCardName?: string;
  submittedCardImage?: string;
  cardCount: number;
  totalPoints: number;
  roundWins: number;
  isTurn: boolean;
}

export interface PublicRoomState {
  roomId: string;
  roomCode: string;
  roomName: string;
  hostPlayerId: string;
  maxPlayers: number;
  totalRounds: number;
  currentRound: number;
  roomVisibility: RoomVisibility;
  roomStatus: RoomStatus;
  isPaused?: boolean;
  pausedByPlayerName?: string;
  currentTurnPlayerId: string | null;
  turnTimeRemaining: number;
  players: PublicPlayerInfo[];
  turnOrder?: string[];
}

export interface LeaderboardEntry {
  rank: number;
  playerId: string;
  playerName: string;
  avatarUrl: string;
  roundWins: number;
  totalPoints: number;
  totalGames?: number;
  completedRounds?: number;
  remainingRounds?: number;
}

export interface ToastMessage {
  id: string;
  title?: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}
