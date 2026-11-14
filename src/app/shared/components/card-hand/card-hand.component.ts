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
    <div class="w-full flex flex-col items-center select-none py-2">
      <!-- Instruction banner for turn / dragging -->
      <div class="mb-2 text-xs font-semibold tracking-wide text-jungle-muted flex items-center space-x-2">
        <span>🖐️ Your Hand ({{ cards.length }}/4)</span>
        <span class="text-jungle-green/60">• Drag cards to reorder or drop onto table to exchange •</span>
      </div>

      <!-- Drag & Drop Card Row -->
      <div 
        cdkDropList 
        id="player-hand-list"
        [cdkDropListData]="cards"
        cdkDropListOrientation="horizontal"
        (cdkDropListDropped)="onDrop($event)"
        class="card-hand-list flex items-center justify-center space-x-2 sm:space-x-4 px-4 py-2 min-h-[180px] sm:min-h-[220px]"
      >
        @for (card of cards; track card.id) {
          <div 
            cdkDrag 
            [cdkDragData]="card"
            class="card-item transition-transform"
          >
            <app-game-card 
              [card]="card"
              [isSelected]="selectedCardId === card.id"
              (cardSelected)="onCardSelected(card.id)"
            />

            <!-- Drag Handle Hint -->
            <div class="text-center text-[10px] text-jungle-muted mt-1 opacity-0 hover:opacity-100 transition-opacity">
              ⋮⋮ drag
            </div>
          </div>
        }

        @if (cards.length === 0) {
          <div class="text-sm text-jungle-muted italic py-8">
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
