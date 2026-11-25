import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { PhysicalCard } from '../../../core/models/game.models';
import { GameCardComponent } from '../game-card/game-card.component';

@Component({
  selector: 'app-card-hand',
  standalone: true,
  imports: [CommonModule, DragDropModule, GameCardComponent],
  template: `
    <div class="w-full flex flex-col items-center select-none py-1">
      <!-- Instruction banner for turn / dragging -->
      <div class="mb-1 text-[11px] sm:text-xs font-semibold tracking-wide text-jungle-muted flex items-center space-x-1.5 text-center">
        <span>✋ Your Hand ({{ cards.length }}/4)</span>
        <span class="text-jungle-green/70">
          • Drag card onto table ring or tap to exchange •
        </span>
      </div>

      <!-- Drag & Drop Card Row (Responsively fits 4 cards on all screens) -->
      <div 
        cdkDropList 
        id="player-hand-list"
        [cdkDropListData]="cards"
        cdkDropListOrientation="horizontal"
        (cdkDropListDropped)="onDrop($event)"
        class="card-hand-list flex items-center justify-center space-x-1.5 xs:space-x-2 sm:space-x-4 px-1 sm:px-4 py-1 min-h-[110px] sm:min-h-[160px] w-full max-w-full overflow-x-hidden"
      >
        @for (card of cards; track card.id) {
          <div 
            cdkDrag 
            [cdkDragData]="card"
            [cdkDragDisabled]="!isMyTurn"
            class="card-item transition-transform flex-shrink-0 touch-none"
            [ngClass]="isMyTurn ? 'cursor-grab active:cursor-grabbing hover:-translate-y-1' : 'cursor-pointer'"
          >
            <!-- Card visual -->
            <app-game-card 
              [card]="card"
              [isSelected]="selectedCardId === card.id"
              (cardSelected)="onCardSelected(card.id)"
            />

            <!-- Drag Preview (What shows under user finger / cursor while dragging) -->
            <div *cdkDragPreview class="opacity-95 shadow-2xl scale-110 pointer-events-none rounded-2xl">
              <app-game-card [card]="card" [isSelected]="true" />
            </div>

            <!-- Drag Placeholder (Shown in place of dragged card in hand) -->
            <div *cdkDragPlaceholder class="w-[72px] h-[106px] xs:w-20 xs:h-28 sm:w-28 sm:h-40 border-2 border-dashed border-jungle-green/40 rounded-xl bg-jungle-surface/20"></div>
          </div>
        }

        @if (cards.length === 0) {
          <div class="text-xs sm:text-sm text-jungle-muted italic py-4">
            Cards will appear once the round starts...
          </div>
        }
      </div>
    </div>
  `,
})
export class CardHandComponent {
  @Input({ required: true }) cards: PhysicalCard[] = [];
  @Input() selectedCardId: string | null = null;
  @Input() isMyTurn = false;

  @Output() cardSelected = new EventEmitter<string>();
  @Output() cardExchanged = new EventEmitter<string>();

  public onCardSelected(cardId: string): void {
    this.cardSelected.emit(cardId);
  }

  public onDrop(event: CdkDragDrop<PhysicalCard[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
    }
  }
}
