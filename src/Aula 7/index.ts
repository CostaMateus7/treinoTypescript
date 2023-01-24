// Null / undefined

function fullname(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  if (lastName === undefined) {
    return {
      firstName,
    };
  } else {
    return {
      firstName,
      lastName,
    };
  }
}
console.log(fullname('Mateus'));
