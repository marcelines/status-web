// @generated by protoc-gen-es v1.0.0 with parameter "target=ts"
// @generated from file url.proto (syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from '@bufbuild/protobuf'
import { Message, proto3 } from '@bufbuild/protobuf'

/**
 * @generated from message Community
 */
export class Community extends Message<Community> {
  /**
   * @generated from field: string display_name = 1;
   */
  displayName = ''

  /**
   * @generated from field: string description = 2;
   */
  description = ''

  /**
   * @generated from field: uint32 members_count = 3;
   */
  membersCount = 0

  /**
   * @generated from field: string color = 4;
   */
  color = ''

  /**
   * @generated from field: repeated uint32 tag_indices = 5;
   */
  tagIndices: number[] = []

  constructor(data?: PartialMessage<Community>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime = proto3
  static readonly typeName = 'Community'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'display_name',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    {
      no: 2,
      name: 'description',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    {
      no: 3,
      name: 'members_count',
      kind: 'scalar',
      T: 13 /* ScalarType.UINT32 */,
    },
    { no: 4, name: 'color', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    {
      no: 5,
      name: 'tag_indices',
      kind: 'scalar',
      T: 13 /* ScalarType.UINT32 */,
      repeated: true,
    },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): Community {
    return new Community().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): Community {
    return new Community().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): Community {
    return new Community().fromJsonString(jsonString, options)
  }

  static equals(
    a: Community | PlainMessage<Community> | undefined,
    b: Community | PlainMessage<Community> | undefined
  ): boolean {
    return proto3.util.equals(Community, a, b)
  }
}

/**
 * @generated from message Channel
 */
export class Channel extends Message<Channel> {
  /**
   * @generated from field: string display_name = 1;
   */
  displayName = ''

  /**
   * @generated from field: string description = 2;
   */
  description = ''

  /**
   * @generated from field: string emoji = 3;
   */
  emoji = ''

  /**
   * @generated from field: string color = 4;
   */
  color = ''

  /**
   * @generated from field: Community community = 5;
   */
  community?: Community

  /**
   * @generated from field: string uuid = 6;
   */
  uuid = ''

  constructor(data?: PartialMessage<Channel>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime = proto3
  static readonly typeName = 'Channel'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'display_name',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    {
      no: 2,
      name: 'description',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    { no: 3, name: 'emoji', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 4, name: 'color', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 5, name: 'community', kind: 'message', T: Community },
    { no: 6, name: 'uuid', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): Channel {
    return new Channel().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): Channel {
    return new Channel().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): Channel {
    return new Channel().fromJsonString(jsonString, options)
  }

  static equals(
    a: Channel | PlainMessage<Channel> | undefined,
    b: Channel | PlainMessage<Channel> | undefined
  ): boolean {
    return proto3.util.equals(Channel, a, b)
  }
}

/**
 * @generated from message User
 */
export class User extends Message<User> {
  /**
   * @generated from field: string display_name = 1;
   */
  displayName = ''

  /**
   * @generated from field: string description = 2;
   */
  description = ''

  /**
   * @generated from field: string color = 3;
   */
  color = ''

  constructor(data?: PartialMessage<User>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime = proto3
  static readonly typeName = 'User'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'display_name',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    {
      no: 2,
      name: 'description',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    { no: 3, name: 'color', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): User {
    return new User().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): User {
    return new User().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): User {
    return new User().fromJsonString(jsonString, options)
  }

  static equals(
    a: User | PlainMessage<User> | undefined,
    b: User | PlainMessage<User> | undefined
  ): boolean {
    return proto3.util.equals(User, a, b)
  }
}

/**
 * @generated from message URLData
 */
export class URLData extends Message<URLData> {
  /**
   * Community, Channel, or User
   *
   * @generated from field: bytes content = 1;
   */
  content = new Uint8Array(0)

  constructor(data?: PartialMessage<URLData>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime = proto3
  static readonly typeName = 'URLData'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'content', kind: 'scalar', T: 12 /* ScalarType.BYTES */ },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): URLData {
    return new URLData().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): URLData {
    return new URLData().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): URLData {
    return new URLData().fromJsonString(jsonString, options)
  }

  static equals(
    a: URLData | PlainMessage<URLData> | undefined,
    b: URLData | PlainMessage<URLData> | undefined
  ): boolean {
    return proto3.util.equals(URLData, a, b)
  }
}

/**
 * @generated from message URLParams
 */
export class URLParams extends Message<URLParams> {
  /**
   * @generated from field: string encoded_url_data = 1;
   */
  encodedUrlData = ''

  /**
   * Signature of encoded URL data
   *
   * @generated from field: string encoded_signature = 2;
   */
  encodedSignature = ''

  constructor(data?: PartialMessage<URLParams>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime = proto3
  static readonly typeName = 'URLParams'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: 'encoded_url_data',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
    {
      no: 2,
      name: 'encoded_signature',
      kind: 'scalar',
      T: 9 /* ScalarType.STRING */,
    },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): URLParams {
    return new URLParams().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): URLParams {
    return new URLParams().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): URLParams {
    return new URLParams().fromJsonString(jsonString, options)
  }

  static equals(
    a: URLParams | PlainMessage<URLParams> | undefined,
    b: URLParams | PlainMessage<URLParams> | undefined
  ): boolean {
    return proto3.util.equals(URLParams, a, b)
  }
}