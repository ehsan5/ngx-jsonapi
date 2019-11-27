import { Component, Input } from '@angular/core';
import { DocumentCollection } from 'hpen-jsonapi';
@Component({
    selector: 'demo-collection-paginator',
    templateUrl: './collection-paginator.component.html'
})
export class CollectionPaginatorComponent {
    @Input() public collection: DocumentCollection;
}
