import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipesPage } from './recipes.page';
import { ModalController } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

describe('RecipesPage', () => {
  let component: RecipesPage;
  let fixture: ComponentFixture<RecipesPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), RecipesPage],
      providers: [ModalController],
    });
    fixture = TestBed.createComponent(RecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
