export class Option {
  id: number;
  value: string;
}

export class Question {
  id: number;
  question: string;
  options: Option[];
}

export class Step {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

export class Member {
  id: number;
  name: string;
}
