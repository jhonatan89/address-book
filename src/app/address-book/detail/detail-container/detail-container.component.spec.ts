import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddressBookService } from '../../services/address-book.service';
import { DetailViewComponent } from '../detail-view/detail-view.component';
import { DetailContainerComponent } from './detail-container.component';

describe('DetailContainerComponent', () => {
  let component: DetailContainerComponent;
  let fixture: ComponentFixture<DetailContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailContainerComponent, DetailViewComponent],
      imports: [HttpClientModule, SharedModule, RouterTestingModule],
      providers: [AddressBookService],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
