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
    <div class="w-full flex flex-col items-center select-none py-1 sm:py-2">
      <!-- Instruction banner for turn / dragging -->
      <div class="mb-1 text-[11px] sm:text-xs font-semibold tracking-wide text-jungle-muted flex items-center space-x-1.5 text-center">
        <span>🖐️ Your Hand ({{ cards.length }}/4)</span>
        <span class="hidden sm:inline text-jungle-green/60">• Drag cards to reorder or drop onto table to exchange •</span>
      </div>

      <!-- Drag & Drop Card Row (Responsively fits 4 cards on all screens) -->
      <div 
        cdkDropList 
        id="player-hand-list"
        [cdkDropListData]="cards"
        cdkDropListOrientation="horizontal"
        (cdkDropListDropped)="onDrop($event)"
        class="card-hand-list flex items-center justify-center space-x-1.5 xs:space-x-2 sm:space-x-4 px-1 sm:px-4 py-1 sm:py-2 min-h-[115px] sm:min-h-[180px] w-full max-w-full overflow-x-hidden"
      >
        @for (card of cards; track card.id) {
          <div 
            cdkDrag 
            [cdkDragData]="card"
            class="card-item transition-transform flex-shrink-0"
          >
            <app-game-card 
              [card]="card"
              [isSelected]="selectedCardId === card.id"
              (cardSelected)="onCardSelected(card.id)"
            />
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
