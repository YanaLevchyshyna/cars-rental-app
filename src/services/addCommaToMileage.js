function addCommaToMileage(mileage) {
  if (typeof mileage !== 'undefined' && mileage !== null) {
    // Перетворення в рядок
    const mileageString = mileage.toString();

    const modifiedMileage =
      mileageString.charAt(0) + ',' + mileageString.slice(1);

    return modifiedMileage;
  }
  return mileage;
}

export default addCommaToMileage;
