import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { images, Item } from '../data/images';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
SetCatagories(index: number) {
  this.categories.update(categories => {
    categories[index] = !categories[index];
    return categories;
  });
  console.log(this.categories());
  
}
download(item: Item) {
  item.downloads++;
}
  title = 'my-ark1';
  items = signal<Item[]>(images);
  categories = signal<boolean[]>([false, false, false]);
}
