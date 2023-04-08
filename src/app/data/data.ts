export class Alumno {
    constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
      public email: string,
      public HasScholarship: boolean,
    ) {}

    get fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
  }
