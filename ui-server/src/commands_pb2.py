# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: commands.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
from google.protobuf import descriptor_pb2
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import timestamp_pb2 as google_dot_protobuf_dot_timestamp__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='commands.proto',
  package='',
  syntax='proto3',
  serialized_pb=_b('\n\x0e\x63ommands.proto\x1a\x1fgoogle/protobuf/timestamp.proto\"\x88\x01\n\x05\x41lert\x12\x12\n\nalert_text\x18\x01 \x01(\t\x12&\n\x0b\x61lert_level\x18\x02 \x01(\x0e\x32\x11.Alert.AlertLevel\"C\n\nAlertLevel\x12\t\n\x05\x45RROR\x10\x00\x12\x08\n\x04WARN\x10\x01\x12\x08\n\x04INFO\x10\x02\x12\t\n\x05\x44\x45\x42UG\x10\x03\x12\x0b\n\x07SUCCESS\x10\x04\"\x0c\n\nInstrument\"%\n\x06Toggle\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\x08\"\x16\n\x06\x42utton\x12\x0c\n\x04name\x18\x01 \x01(\t\"\xa4\x01\n\nController\x12$\n\x04\x61xes\x18\x01 \x03(\x0b\x32\x16.Controller.AnalogAxis\x1ap\n\nAnalogAxis\x12\x0c\n\x04name\x18\x01 \x01(\t\x12\x12\n\nx_position\x18\x02 \x01(\x02\x12\x12\n\ny_position\x18\x03 \x01(\x02\x12\x15\n\rangle_degrees\x18\x04 \x01(\x02\x12\x15\n\rangle_radians\x18\x05 \x01(\x02\"\xe0\x01\n\x07\x43ommand\x12\x30\n\x0cmessage_time\x18\x01 \x01(\x0b\x32\x1a.google.protobuf.Timestamp\x12\x17\n\x05\x61lert\x18\x02 \x01(\x0b\x32\x06.AlertH\x00\x12!\n\ninstrument\x18\x03 \x01(\x0b\x32\x0b.InstrumentH\x00\x12\x19\n\x06toggle\x18\x04 \x01(\x0b\x32\x07.ToggleH\x00\x12!\n\ncontroller\x18\x05 \x01(\x0b\x32\x0b.ControllerH\x00\x12\x19\n\x06\x62utton\x18\x06 \x01(\x0b\x32\x07.ButtonH\x00\x42\x0e\n\x0c\x63ommand_typeb\x06proto3')
  ,
  dependencies=[google_dot_protobuf_dot_timestamp__pb2.DESCRIPTOR,])



_ALERT_ALERTLEVEL = _descriptor.EnumDescriptor(
  name='AlertLevel',
  full_name='Alert.AlertLevel',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='ERROR', index=0, number=0,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='WARN', index=1, number=1,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='INFO', index=2, number=2,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='DEBUG', index=3, number=3,
      options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='SUCCESS', index=4, number=4,
      options=None,
      type=None),
  ],
  containing_type=None,
  options=None,
  serialized_start=121,
  serialized_end=188,
)
_sym_db.RegisterEnumDescriptor(_ALERT_ALERTLEVEL)


_ALERT = _descriptor.Descriptor(
  name='Alert',
  full_name='Alert',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='alert_text', full_name='Alert.alert_text', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='alert_level', full_name='Alert.alert_level', index=1,
      number=2, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
    _ALERT_ALERTLEVEL,
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=52,
  serialized_end=188,
)


_INSTRUMENT = _descriptor.Descriptor(
  name='Instrument',
  full_name='Instrument',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=190,
  serialized_end=202,
)


_TOGGLE = _descriptor.Descriptor(
  name='Toggle',
  full_name='Toggle',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='Toggle.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='value', full_name='Toggle.value', index=1,
      number=2, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=204,
  serialized_end=241,
)


_BUTTON = _descriptor.Descriptor(
  name='Button',
  full_name='Button',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='Button.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=243,
  serialized_end=265,
)


_CONTROLLER_ANALOGAXIS = _descriptor.Descriptor(
  name='AnalogAxis',
  full_name='Controller.AnalogAxis',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='name', full_name='Controller.AnalogAxis.name', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='x_position', full_name='Controller.AnalogAxis.x_position', index=1,
      number=2, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='y_position', full_name='Controller.AnalogAxis.y_position', index=2,
      number=3, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='angle_degrees', full_name='Controller.AnalogAxis.angle_degrees', index=3,
      number=4, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='angle_radians', full_name='Controller.AnalogAxis.angle_radians', index=4,
      number=5, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=320,
  serialized_end=432,
)

_CONTROLLER = _descriptor.Descriptor(
  name='Controller',
  full_name='Controller',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='axes', full_name='Controller.axes', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[_CONTROLLER_ANALOGAXIS, ],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=268,
  serialized_end=432,
)


_COMMAND = _descriptor.Descriptor(
  name='Command',
  full_name='Command',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='message_time', full_name='Command.message_time', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='alert', full_name='Command.alert', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='instrument', full_name='Command.instrument', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='toggle', full_name='Command.toggle', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='controller', full_name='Command.controller', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
    _descriptor.FieldDescriptor(
      name='button', full_name='Command.button', index=5,
      number=6, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      options=None),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
    _descriptor.OneofDescriptor(
      name='command_type', full_name='Command.command_type',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=435,
  serialized_end=659,
)

_ALERT.fields_by_name['alert_level'].enum_type = _ALERT_ALERTLEVEL
_ALERT_ALERTLEVEL.containing_type = _ALERT
_CONTROLLER_ANALOGAXIS.containing_type = _CONTROLLER
_CONTROLLER.fields_by_name['axes'].message_type = _CONTROLLER_ANALOGAXIS
_COMMAND.fields_by_name['message_time'].message_type = google_dot_protobuf_dot_timestamp__pb2._TIMESTAMP
_COMMAND.fields_by_name['alert'].message_type = _ALERT
_COMMAND.fields_by_name['instrument'].message_type = _INSTRUMENT
_COMMAND.fields_by_name['toggle'].message_type = _TOGGLE
_COMMAND.fields_by_name['controller'].message_type = _CONTROLLER
_COMMAND.fields_by_name['button'].message_type = _BUTTON
_COMMAND.oneofs_by_name['command_type'].fields.append(
  _COMMAND.fields_by_name['alert'])
_COMMAND.fields_by_name['alert'].containing_oneof = _COMMAND.oneofs_by_name['command_type']
_COMMAND.oneofs_by_name['command_type'].fields.append(
  _COMMAND.fields_by_name['instrument'])
_COMMAND.fields_by_name['instrument'].containing_oneof = _COMMAND.oneofs_by_name['command_type']
_COMMAND.oneofs_by_name['command_type'].fields.append(
  _COMMAND.fields_by_name['toggle'])
_COMMAND.fields_by_name['toggle'].containing_oneof = _COMMAND.oneofs_by_name['command_type']
_COMMAND.oneofs_by_name['command_type'].fields.append(
  _COMMAND.fields_by_name['controller'])
_COMMAND.fields_by_name['controller'].containing_oneof = _COMMAND.oneofs_by_name['command_type']
_COMMAND.oneofs_by_name['command_type'].fields.append(
  _COMMAND.fields_by_name['button'])
_COMMAND.fields_by_name['button'].containing_oneof = _COMMAND.oneofs_by_name['command_type']
DESCRIPTOR.message_types_by_name['Alert'] = _ALERT
DESCRIPTOR.message_types_by_name['Instrument'] = _INSTRUMENT
DESCRIPTOR.message_types_by_name['Toggle'] = _TOGGLE
DESCRIPTOR.message_types_by_name['Button'] = _BUTTON
DESCRIPTOR.message_types_by_name['Controller'] = _CONTROLLER
DESCRIPTOR.message_types_by_name['Command'] = _COMMAND
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Alert = _reflection.GeneratedProtocolMessageType('Alert', (_message.Message,), dict(
  DESCRIPTOR = _ALERT,
  __module__ = 'commands_pb2'
  # @@protoc_insertion_point(class_scope:Alert)
  ))
_sym_db.RegisterMessage(Alert)

Instrument = _reflection.GeneratedProtocolMessageType('Instrument', (_message.Message,), dict(
  DESCRIPTOR = _INSTRUMENT,
  __module__ = 'commands_pb2'
  # @@protoc_insertion_point(class_scope:Instrument)
  ))
_sym_db.RegisterMessage(Instrument)

Toggle = _reflection.GeneratedProtocolMessageType('Toggle', (_message.Message,), dict(
  DESCRIPTOR = _TOGGLE,
  __module__ = 'commands_pb2'
  # @@protoc_insertion_point(class_scope:Toggle)
  ))
_sym_db.RegisterMessage(Toggle)

Button = _reflection.GeneratedProtocolMessageType('Button', (_message.Message,), dict(
  DESCRIPTOR = _BUTTON,
  __module__ = 'commands_pb2'
  # @@protoc_insertion_point(class_scope:Button)
  ))
_sym_db.RegisterMessage(Button)

Controller = _reflection.GeneratedProtocolMessageType('Controller', (_message.Message,), dict(

  AnalogAxis = _reflection.GeneratedProtocolMessageType('AnalogAxis', (_message.Message,), dict(
    DESCRIPTOR = _CONTROLLER_ANALOGAXIS,
    __module__ = 'commands_pb2'
    # @@protoc_insertion_point(class_scope:Controller.AnalogAxis)
    ))
  ,
  DESCRIPTOR = _CONTROLLER,
  __module__ = 'commands_pb2'
  # @@protoc_insertion_point(class_scope:Controller)
  ))
_sym_db.RegisterMessage(Controller)
_sym_db.RegisterMessage(Controller.AnalogAxis)

Command = _reflection.GeneratedProtocolMessageType('Command', (_message.Message,), dict(
  DESCRIPTOR = _COMMAND,
  __module__ = 'commands_pb2'
  # @@protoc_insertion_point(class_scope:Command)
  ))
_sym_db.RegisterMessage(Command)


# @@protoc_insertion_point(module_scope)
