import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-questionary-dialog',
  templateUrl: './questionary-dialog.component.html',
  styleUrls: ['./questionary-dialog.component.scss']
})
export class QuestionaryDialogComponent implements OnInit {

  questionaryName = '';
  questionaryDescription = '';
  newQuestion = '';

  questionsList = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<QuestionaryDialogComponent>,
    private firebase: FirebaseService,
  ) { }

  ngOnInit(): void { }

  async saveQuestionary() {
    const questionary = {
      courseId: this.data.courseId,
      name: this.questionaryName,
      description: this.questionaryDescription,
      questions: this.questionsList,
    }
    const result = await this.firebase.create('questionnaires', questionary);
    this.dialogRef.close();
  }

  async saveQuestion() {
    const result = await this.firebase.create('questions', {
      question: this.newQuestion
    });
    this.questionsList.push({
      id: result.id,
      question: this.newQuestion,
    });
    this.newQuestion = '';
  }
}
