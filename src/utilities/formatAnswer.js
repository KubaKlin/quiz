export function formatAnswers(userAnswer) {
  if (userAnswer.indexOf(',') !== -1) {
    const multiChoiceAnswer = userAnswer.toLowerCase().replace(/[\s,]/g, '');
    return multiChoiceAnswer.split('').sort().join(',');
  } else {
    return userAnswer.toLowerCase().replace(/\s/g, '');
  }
}