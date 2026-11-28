import { PublicRoomState, PhysicalCard, LeaderboardEntry } from './game.models';

export type ClientEventType =
  | 'join_room'
  | 'submit_card'
  | 'player_ready'
  | 'start_game'
  | 'exchange_card'
  | 'declare_winner'
  | 'request_next_round'
  | 'pause_game'
  | 'resume_game'
  | 'end_game'
  | 'leave_room'
  | 'heartbeat';

export type ServerEventType =
  | 'room_updated'
  | 'player_joined'
  | 'player_left'
  | 'player_ready_updated'
  | 'game_started'
  | 'cards_distributed'
  | 'turn_started'
  | 'card_exchanged'
  | 'private_hand_updated'
  | 'timer_updated'
  | 'winner_validated'
  | 'invalid_winner_claim'
  | 'round_completed'
  | 'round_countdown_started'
  | 'leaderboard_updated'
  | 'next_round_started'
  | 'game_paused'
  | 'game_resumed'
  | 'game_completed'
  | 'player_disconnected'
  | 'player_reconnected'
  | 'error';

export interface BaseSocketMessage<T extends string, P = any> {
  event: T;
  roomId: string;
  payload: P;
}

export interface RoundCountdownStartedPayload {
  countdownSeconds: number;
  nextRoundNumber: number;
}

export interface CardExchangedPayload {
  fromPlayerId: string;
  toPlayerId: string;
  nextTurnPlayerId: string;
}

export interface WinnerValidatedPayload {
  winnerPlayerId: string;
  winnerPlayerName: string;
  cardName: string;
  cardImageUrl?: string;
  points: number;
  matchingCards: PhysicalCard[];
}

export interface RoundCompletedPayload {
  roundNumber: number;
  winnerPlayerId: string;
  winnerPlayerName: string;
  leaderboard: LeaderboardEntry[];
  isFinalRound: boolean;
}

export interface GameCompletedPayload {
  championPlayerId: string;
  championPlayerName: string;
  championAvatar: string;
  finalLeaderboard: LeaderboardEntry[];
  endedByHost?: boolean;
}
