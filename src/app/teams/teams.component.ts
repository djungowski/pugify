import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop';

interface Player {
  name: string;
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent {
  team1: Array<Player> = [
    { name: 'Tank 1'},
    { name: 'DPS 1' },
    { name: 'DPS 2' },
    { name: 'Support 1' },
    { name: 'Support 2' }
  ]

  team2: Array<Player> = [
    { name: 'Tank 2'},
    { name: 'DPS 3' },
    { name: 'DPS 4' },
    { name: 'Support 3' },
    { name: 'Support 4' }
  ]

  drop(event: CdkDragDrop<Player[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
