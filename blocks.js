Blockly.Blocks['task_parallel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("In parallel");
    this.appendStatementInput("TASK1")
        .setCheck("Task")
        .appendField("do");
    this.appendDummyInput()
        .appendField("use result")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "USE1");
    this.appendStatementInput("TASK2")
        .setCheck("Task")
        .appendField("do");
    this.appendDummyInput()
        .appendField("use result")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "USE2");
    this.setPreviousStatement(true, "Task");
    this.setNextStatement(true, "Task");
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['task_choice'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Choice of");
    this.appendValueInput("PREDICATE1")
        .setCheck("Predicate")
        .appendField("action")
        .appendField(new Blockly.FieldTextInput("Continue"), "ACTION1")
        .appendField("when value");
    this.appendStatementInput("TASK1")
        .setCheck("Task");
    this.appendValueInput("PREDICATE2")
        .setCheck("Predicate")
        .appendField("action")
        .appendField(new Blockly.FieldTextInput("Stop"), "ACTION2")
        .appendField("when value");
    this.appendStatementInput("TASK2")
        .setCheck("Task");
    this.setPreviousStatement(true, "Task");
    this.setNextStatement(true, "Task");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['task_forget'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Forget previous result");
    this.setPreviousStatement(true, "Task");
    this.setNextStatement(true, "Task");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['task_predicate_isstable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("is stable");
    this.setOutput(true, "Predicate");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['task_define'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Task")
        .appendField(new Blockly.FieldTextInput("doSomething"), "NAME");
    this.appendStatementInput("NAME")
        .setCheck("Task");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['task_predicate_satisfies'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Check")
        .appendField("satisfies");
    this.setOutput(true, "Predicate");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['task_name'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("doSomething"), "TASK_NAME");
    this.setPreviousStatement(true, "Task");
    this.setNextStatement(true, "Task");
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['task_predicate_name'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("check"), "PREDICATE_NAME");
    this.setOutput(true, "Check");
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['task_predicate_isunstable'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("is unstable");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['task_predicate_isthereornot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("is there or not");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};