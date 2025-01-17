import { Component, Input } from '@angular/core';
import { DocumentCollection } from 'hpen-jsonapi';
@Component({
    selector: 'demo-collection-info',
    templateUrl: './collection-info.component.html'
})
export class CollectionInfoComponent {
    @Input() public collection: DocumentCollection;
}
