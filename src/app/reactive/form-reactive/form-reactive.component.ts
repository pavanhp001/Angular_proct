import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/shared/forbidden-name.directive';
import { identityRevealedValidator } from 'src/app/shared/identity-revealed.directive';
import { UniqueAlterEgoValidator } from 'src/app/shared/alter-ego.directive';
import { CreditCardValidator } from 'src/app/shared/creditcardvalidator.directive';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  // form = new FormGroup({
  //   username: new FormControl(),
  //   possword: new FormControl()
  // });
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };

  heroForm: FormGroup;

  ngOnInit(): void {
    this.heroForm = new FormGroup({
      'name': new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i)
      ]),
      'alterEgo': new FormControl(this.hero.alterEgo, {
        asyncValidators: [this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
        updateOn: 'blur'
      }),
      'power': new FormControl(this.hero.power, Validators.required),
      'creditcardnumber': new FormControl('', [Validators.required, CreditCardValidator.validateCcNumber])
    },  { validators: identityRevealedValidator }); // <-- add custom validator at the FormGroup level
  }

  get name() { return this.heroForm.get('name'); }

  get power() { return this.heroForm.get('power'); }

  get alterEgo() { return this.heroForm.get('alterEgo'); }
  
  get creditcardnumber() { return this.heroForm.get('creditcardnumber'); }

  constructor(private alterEgoValidator: UniqueAlterEgoValidator) { }
}

