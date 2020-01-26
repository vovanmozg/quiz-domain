// TODO: replace this temporary database to https://www.npmjs.com/package/ruby-questions
module.exports = [
  {
    "id": "5d547d8a-542d-4050-ad1d-07b1d82cd34c",
    "question": "What will be the output of the following code?\n<code>puts [1,nil,2].compact</code>",
    "type": "mc",
    "choices": {
      "1": "[1,2]",
      "2": "[1,2,nil]",
      "3": "[1,nil,2]",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": "https://apidock.com/ruby/Array/compact"
  },
  {
    "id": "59b9d86e-01c1-4b9c-84db-e6610c6d4ed8",
    "question": "What will be the output of the following code?\n<code>puts { String => -> { } }[String]</code>",
    "type": "mc",
    "choices": {
      "1": "nil",
      "2": "String",
      "3": "Proc",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "e53d42ad-8eaa-4950-aafe-776a029c23df",
    "question": "What will be the output of the following code?\n<code>puts String > Object</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "Object",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": "https://apidock.com/ruby/Module/%3E"
  },
  {
    "id": "e53d42ad-8eaa-4950-aafe-776a029c23d1",
    "question": "Which expression will return true?",
    "type": "mc",
    "choices": {
      "1": "Class < Module",
      "2": "String > Object",
      "3": "Kernel <= Module",
      "4": "StandardError < ArgumentError"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": "https://apidock.com/ruby/Module/%3E%3D"
  },
  {
    "id": "e53d42ad-8eaa-4950-aafe-776a029c23d2",
    "question": "<code>x = [a: 1, b: 2]</code>\nWhich expression will return true?",
    "type": "mc",
    "choices": {
      "1": "x[0][:a] == 1",
      "2": "x[:a] == 1",
      "3": "x[:a] == :b",
      "4": "x[0] == 1"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "e53d42ad-8eaa-4950-aafe-776a029c23d3",
    "question": "How do pick randomly from an array?",
    "type": "mc",
    "choices": {
      "1": "ar.sample",
      "2": "ar.rand",
      "3": "ar.random",
      "4": "ar.pick_random"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": "https://apidock.com/ruby/Array/sample"
  },
  {
    "id": "e53d42ad-8eaa-4950-aafe-776a029c23d4",
    "question": "What will be the output of the following code?\n<code>What will be output of this code?\n" +
      "f = File.open('file.txt', 'w')\n" +
      "f.write('1')\n" +
      "File.rename('file.txt', 'file2.txt')\n" +
      "f.write('2')\n" +
      "f.close\n" +
      "p IO.read('file2.txt')\n</code>",
    "type": "mc",
    "choices": {
      "1": "12",
      "2": "1",
      "3": "2",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  }
]