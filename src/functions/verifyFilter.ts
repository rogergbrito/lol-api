import { Filter } from '../interfaces/filter-interface';

export function verifyFilter(role?: any, name?: any, difficulty?: any): Filter {

  let filter: object = {};
  if (role && name && difficulty) {

    const roleString = Array.isArray(role)
    ? role[0].toString()
    : role.toString();

    const nameString = Array.isArray(name)
    ? name[0].toString()
    : name.toString();

    const difficultyString = Array.isArray(difficulty)
    ? difficulty[0].toString()
    : difficulty.toString();

    const firstLetterRole = roleString.charAt(0).toUpperCase();
    const remainingLettersRole = roleString.slice(1);
    const completeRole = firstLetterRole + remainingLettersRole;

    const firstLetterName = nameString.charAt(0).toUpperCase();
    const remainingLettersName = nameString.slice(1);
    const completeName = firstLetterName + remainingLettersName;

    const firstLetterDifficulty = difficultyString.charAt(0).toUpperCase();
    const remainingLettersDifficulty = difficultyString.slice(1);
    const completeDifficulty = firstLetterDifficulty + remainingLettersDifficulty;

    return filter = { role: completeRole, name: completeName, difficulty: completeDifficulty };
  }

  if (role && difficulty) {

    const roleString = Array.isArray(role)
    ? role[0].toString()
    : role.toString();

    const difficultyString = Array.isArray(difficulty)
    ? difficulty[0].toString()
    : difficulty.toString();

    const firstLetterRole = roleString.charAt(0).toUpperCase();
    const remainingLettersRole = roleString.slice(1);
    const completeRole = firstLetterRole + remainingLettersRole;

    const firstLetterDifficulty = difficultyString.charAt(0).toUpperCase();
    const remainingLettersDifficulty = difficultyString.slice(1);
    const completeDifficulty = firstLetterDifficulty + remainingLettersDifficulty;

    return filter = { role: completeRole, difficulty: completeDifficulty };
  }

  if (role && name) {

    const roleString = Array.isArray(role)
    ? role[0].toString()
    : role.toString();

    const nameString = Array.isArray(name)
    ? name[0].toString()
    : name.toString();

    const firstLetterRole = roleString.charAt(0).toUpperCase();
    const remainingLettersRole = roleString.slice(1);
    const completeRole = firstLetterRole + remainingLettersRole;

    const firstLetterName = nameString.charAt(0).toUpperCase();
    const remainingLettersName = nameString.slice(1);
    const completeName = firstLetterName + remainingLettersName;

    return filter = { role: completeRole, name: completeName };
  }

  if (name && difficulty) {

    const nameString = Array.isArray(name)
    ? name[0].toString()
    : name.toString();

    const difficultyString = Array.isArray(difficulty)
    ? difficulty[0].toString()
    : difficulty.toString();

    const firstLetterName = nameString.charAt(0).toUpperCase();
    const remainingLettersName = nameString.slice(1);
    const completeName = firstLetterName + remainingLettersName;

    const firstLetterDifficulty = difficultyString.charAt(0).toUpperCase();
    const remainingLettersDifficulty = difficultyString.slice(1);
    const completeDifficulty = firstLetterDifficulty + remainingLettersDifficulty;

    return filter = { name: completeName, difficulty: completeDifficulty };
  }

  if (role) {

    const roleString = Array.isArray(role)
    ? role[0].toString()
    : role.toString();


    const firstLetterRole = roleString.charAt(0).toUpperCase();
    const remainingLettersRole = roleString.slice(1);
    const completeRole = firstLetterRole + remainingLettersRole;

    return filter = { role: completeRole };
  }

  if (name) {

    const nameString = Array.isArray(name)
    ? name[0].toString()
    : name.toString();

    const firstLetterName = nameString.charAt(0).toUpperCase();
    const remainingLettersName = nameString.slice(1);
    const completeName = firstLetterName + remainingLettersName;


    return filter = { name: completeName };
  }

  if (difficulty) {

    const difficultyString = Array.isArray(difficulty)
    ? difficulty[0].toString()
    : difficulty.toString();

    const firstLetterDifficulty = difficultyString.charAt(0).toUpperCase();
    const remainingLettersDifficulty = difficultyString.slice(1);
    const completeDifficulty = firstLetterDifficulty + remainingLettersDifficulty;

    return filter = { difficulty: completeDifficulty };
  }

  return filter;

}