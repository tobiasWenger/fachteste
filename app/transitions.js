export default function(){
  this.transition(
    this.toRoute('ftas'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.toRoute('ftks'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.toRoute('ftvs'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.toRoute('ftus'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('ftas'),
    this.toRoute('ft'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('ftks'),
    this.toRoute('ft'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('ftvs'),
    this.toRoute('ft'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('ftus'),
    this.toRoute('ft'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('ft'),
    this.toRoute('group'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.toRoute('settings'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
