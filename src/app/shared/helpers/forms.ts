export const validateFormControls = (form) => {
  if (!form) {
    return;
  }

  for (const controlKey in form.controls) {
    if (form.controls.hasOwnProperty(controlKey)) {
      form.controls[controlKey].markAsTouched();
    }
  }
};
