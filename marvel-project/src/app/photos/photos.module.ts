import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoSearchComponent } from './photo-search/photo-search.component';

@NgModule({
    declarations: [
        PhotoComponent,
        PhotoListComponent,
        PhotoSearchComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})
export class PhotosModule {}