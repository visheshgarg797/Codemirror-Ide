// ANTLR GENERATED CODE: DO NOT EDIT
// jshint ignore: start
import antlr4 from 'antlr4';
import ResearchAdvanceQLListener from './ResearchAdvanceQLListener.js';
import ResearchAdvanceQLVisitor from './ResearchAdvanceQLVisitor.js';

const serializedATN = [
  4, 1, 45, 335, 2, 0, 7, 0, 2, 1, 7, 1, 2, 2, 7, 2, 2, 3, 7, 3, 2, 4, 7, 4, 2, 5, 7, 5, 2, 6, 7, 6, 2, 7, 7, 7, 2, 8,
  7, 8, 2, 9, 7, 9, 2, 10, 7, 10, 2, 11, 7, 11, 2, 12, 7, 12, 2, 13, 7, 13, 2, 14, 7, 14, 2, 15, 7, 15, 2, 16, 7, 16, 2,
  17, 7, 17, 2, 18, 7, 18, 2, 19, 7, 19, 2, 20, 7, 20, 2, 21, 7, 21, 2, 22, 7, 22, 2, 23, 7, 23, 2, 24, 7, 24, 2, 25, 7,
  25, 2, 26, 7, 26, 2, 27, 7, 27, 2, 28, 7, 28, 2, 29, 7, 29, 2, 30, 7, 30, 2, 31, 7, 31, 2, 32, 7, 32, 1, 0, 1, 0, 3,
  0, 69, 8, 0, 1, 0, 1, 0, 1, 0, 3, 0, 74, 8, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 82, 8, 1, 10, 1, 12, 1, 85,
  9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 92, 8, 1, 10, 1, 12, 1, 95, 9, 1, 3, 1, 97, 8, 1, 1, 2, 1, 2, 1, 2, 1, 2, 5,
  2, 103, 8, 2, 10, 2, 12, 2, 106, 9, 2, 1, 3, 1, 3, 1, 3, 1, 3, 5, 3, 112, 8, 3, 10, 3, 12, 3, 115, 9, 3, 1, 4, 1, 4,
  1, 4, 1, 4, 5, 4, 121, 8, 4, 10, 4, 12, 4, 124, 9, 4, 1, 5, 1, 5, 1, 5, 1, 5, 5, 5, 130, 8, 5, 10, 5, 12, 5, 133, 9,
  5, 1, 6, 1, 6, 1, 6, 1, 6, 5, 6, 139, 8, 6, 10, 6, 12, 6, 142, 9, 6, 1, 7, 1, 7, 1, 7, 1, 7, 1, 7, 3, 7, 149, 8, 7, 1,
  8, 3, 8, 152, 8, 8, 1, 8, 3, 8, 155, 8, 8, 1, 8, 3, 8, 158, 8, 8, 1, 8, 3, 8, 161, 8, 8, 1, 8, 1, 8, 3, 8, 165, 8, 8,
  1, 8, 1, 8, 3, 8, 169, 8, 8, 1, 8, 1, 8, 3, 8, 173, 8, 8, 1, 8, 3, 8, 176, 8, 8, 1, 8, 3, 8, 179, 8, 8, 1, 8, 3, 8,
  182, 8, 8, 1, 8, 3, 8, 185, 8, 8, 1, 8, 3, 8, 188, 8, 8, 1, 9, 1, 9, 1, 9, 3, 9, 193, 8, 9, 1, 9, 3, 9, 196, 8, 9, 1,
  9, 3, 9, 199, 8, 9, 1, 9, 1, 9, 3, 9, 203, 8, 9, 1, 9, 3, 9, 206, 8, 9, 3, 9, 208, 8, 9, 1, 10, 1, 10, 1, 10, 3, 10,
  213, 8, 10, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 1, 11, 3, 11, 224, 8, 11, 1, 12, 1, 12, 1, 12, 1,
  12, 1, 13, 1, 13, 3, 13, 232, 8, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 1, 13, 3, 13, 240, 8, 13, 1, 13, 1, 13, 1, 14,
  1, 14, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 1, 15, 3, 15, 252, 8, 15, 1, 16, 1, 16, 1, 16, 3, 16, 257, 8, 16, 1, 16, 1,
  16, 1, 17, 1, 17, 1, 18, 1, 18, 1, 19, 1, 19, 1, 20, 1, 20, 1, 21, 1, 21, 1, 22, 1, 22, 1, 23, 3, 23, 274, 8, 23, 1,
  23, 1, 23, 1, 24, 3, 24, 279, 8, 24, 1, 24, 1, 24, 3, 24, 283, 8, 24, 1, 24, 1, 24, 3, 24, 287, 8, 24, 1, 24, 3, 24,
  290, 8, 24, 1, 25, 3, 25, 293, 8, 25, 1, 25, 1, 25, 1, 26, 3, 26, 298, 8, 26, 1, 26, 1, 26, 1, 27, 3, 27, 303, 8, 27,
  1, 27, 1, 27, 1, 28, 3, 28, 308, 8, 28, 1, 28, 1, 28, 1, 29, 1, 29, 1, 30, 3, 30, 315, 8, 30, 1, 30, 1, 30, 1, 31, 3,
  31, 320, 8, 31, 1, 31, 1, 31, 3, 31, 324, 8, 31, 4, 31, 326, 8, 31, 11, 31, 12, 31, 327, 1, 32, 4, 32, 331, 8, 32, 11,
  32, 12, 32, 332, 1, 32, 0, 0, 33, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42,
  44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 0, 5, 2, 0, 3, 3, 8, 8, 2, 0, 4, 4, 9, 9, 1, 0, 18, 19, 2, 0, 22, 22, 24,
  24, 2, 0, 21, 21, 28, 29, 366, 0, 68, 1, 0, 0, 0, 2, 96, 1, 0, 0, 0, 4, 98, 1, 0, 0, 0, 6, 107, 1, 0, 0, 0, 8, 116, 1,
  0, 0, 0, 10, 125, 1, 0, 0, 0, 12, 134, 1, 0, 0, 0, 14, 148, 1, 0, 0, 0, 16, 187, 1, 0, 0, 0, 18, 207, 1, 0, 0, 0, 20,
  209, 1, 0, 0, 0, 22, 223, 1, 0, 0, 0, 24, 225, 1, 0, 0, 0, 26, 229, 1, 0, 0, 0, 28, 243, 1, 0, 0, 0, 30, 251, 1, 0, 0,
  0, 32, 253, 1, 0, 0, 0, 34, 260, 1, 0, 0, 0, 36, 262, 1, 0, 0, 0, 38, 264, 1, 0, 0, 0, 40, 266, 1, 0, 0, 0, 42, 268,
  1, 0, 0, 0, 44, 270, 1, 0, 0, 0, 46, 273, 1, 0, 0, 0, 48, 289, 1, 0, 0, 0, 50, 292, 1, 0, 0, 0, 52, 297, 1, 0, 0, 0,
  54, 302, 1, 0, 0, 0, 56, 307, 1, 0, 0, 0, 58, 311, 1, 0, 0, 0, 60, 314, 1, 0, 0, 0, 62, 325, 1, 0, 0, 0, 64, 330, 1,
  0, 0, 0, 66, 69, 3, 64, 32, 0, 67, 69, 3, 60, 30, 0, 68, 66, 1, 0, 0, 0, 68, 67, 1, 0, 0, 0, 68, 69, 1, 0, 0, 0, 69,
  70, 1, 0, 0, 0, 70, 73, 3, 2, 1, 0, 71, 74, 3, 64, 32, 0, 72, 74, 3, 60, 30, 0, 73, 71, 1, 0, 0, 0, 73, 72, 1, 0, 0,
  0, 73, 74, 1, 0, 0, 0, 74, 75, 1, 0, 0, 0, 75, 76, 5, 0, 0, 1, 76, 1, 1, 0, 0, 0, 77, 83, 3, 4, 2, 0, 78, 79, 3, 14,
  7, 0, 79, 80, 3, 4, 2, 0, 80, 82, 1, 0, 0, 0, 81, 78, 1, 0, 0, 0, 82, 85, 1, 0, 0, 0, 83, 81, 1, 0, 0, 0, 83, 84, 1,
  0, 0, 0, 84, 97, 1, 0, 0, 0, 85, 83, 1, 0, 0, 0, 86, 87, 3, 48, 24, 0, 87, 93, 3, 16, 8, 0, 88, 89, 3, 48, 24, 0, 89,
  90, 3, 16, 8, 0, 90, 92, 1, 0, 0, 0, 91, 88, 1, 0, 0, 0, 92, 95, 1, 0, 0, 0, 93, 91, 1, 0, 0, 0, 93, 94, 1, 0, 0, 0,
  94, 97, 1, 0, 0, 0, 95, 93, 1, 0, 0, 0, 96, 77, 1, 0, 0, 0, 96, 86, 1, 0, 0, 0, 97, 3, 1, 0, 0, 0, 98, 104, 3, 6, 3,
  0, 99, 100, 3, 52, 26, 0, 100, 101, 3, 6, 3, 0, 101, 103, 1, 0, 0, 0, 102, 99, 1, 0, 0, 0, 103, 106, 1, 0, 0, 0, 104,
  102, 1, 0, 0, 0, 104, 105, 1, 0, 0, 0, 105, 5, 1, 0, 0, 0, 106, 104, 1, 0, 0, 0, 107, 113, 3, 8, 4, 0, 108, 109, 3,
  50, 25, 0, 109, 110, 3, 8, 4, 0, 110, 112, 1, 0, 0, 0, 111, 108, 1, 0, 0, 0, 112, 115, 1, 0, 0, 0, 113, 111, 1, 0, 0,
  0, 113, 114, 1, 0, 0, 0, 114, 7, 1, 0, 0, 0, 115, 113, 1, 0, 0, 0, 116, 122, 3, 10, 5, 0, 117, 118, 3, 48, 24, 0, 118,
  119, 3, 10, 5, 0, 119, 121, 1, 0, 0, 0, 120, 117, 1, 0, 0, 0, 121, 124, 1, 0, 0, 0, 122, 120, 1, 0, 0, 0, 122, 123, 1,
  0, 0, 0, 123, 9, 1, 0, 0, 0, 124, 122, 1, 0, 0, 0, 125, 131, 3, 12, 6, 0, 126, 127, 3, 54, 27, 0, 127, 128, 3, 12, 6,
  0, 128, 130, 1, 0, 0, 0, 129, 126, 1, 0, 0, 0, 130, 133, 1, 0, 0, 0, 131, 129, 1, 0, 0, 0, 131, 132, 1, 0, 0, 0, 132,
  11, 1, 0, 0, 0, 133, 131, 1, 0, 0, 0, 134, 140, 3, 16, 8, 0, 135, 136, 3, 56, 28, 0, 136, 137, 3, 16, 8, 0, 137, 139,
  1, 0, 0, 0, 138, 135, 1, 0, 0, 0, 139, 142, 1, 0, 0, 0, 140, 138, 1, 0, 0, 0, 140, 141, 1, 0, 0, 0, 141, 13, 1, 0, 0,
  0, 142, 140, 1, 0, 0, 0, 143, 149, 3, 52, 26, 0, 144, 149, 3, 50, 25, 0, 145, 149, 3, 48, 24, 0, 146, 149, 3, 54, 27,
  0, 147, 149, 3, 56, 28, 0, 148, 143, 1, 0, 0, 0, 148, 144, 1, 0, 0, 0, 148, 145, 1, 0, 0, 0, 148, 146, 1, 0, 0, 0,
  148, 147, 1, 0, 0, 0, 149, 15, 1, 0, 0, 0, 150, 152, 3, 64, 32, 0, 151, 150, 1, 0, 0, 0, 151, 152, 1, 0, 0, 0, 152,
  154, 1, 0, 0, 0, 153, 155, 3, 14, 7, 0, 154, 153, 1, 0, 0, 0, 154, 155, 1, 0, 0, 0, 155, 157, 1, 0, 0, 0, 156, 158, 3,
  62, 31, 0, 157, 156, 1, 0, 0, 0, 157, 158, 1, 0, 0, 0, 158, 160, 1, 0, 0, 0, 159, 161, 3, 64, 32, 0, 160, 159, 1, 0,
  0, 0, 160, 161, 1, 0, 0, 0, 161, 162, 1, 0, 0, 0, 162, 164, 5, 1, 0, 0, 163, 165, 3, 64, 32, 0, 164, 163, 1, 0, 0, 0,
  164, 165, 1, 0, 0, 0, 165, 166, 1, 0, 0, 0, 166, 168, 3, 4, 2, 0, 167, 169, 3, 64, 32, 0, 168, 167, 1, 0, 0, 0, 168,
  169, 1, 0, 0, 0, 169, 170, 1, 0, 0, 0, 170, 172, 5, 2, 0, 0, 171, 173, 3, 64, 32, 0, 172, 171, 1, 0, 0, 0, 172, 173,
  1, 0, 0, 0, 173, 175, 1, 0, 0, 0, 174, 176, 3, 62, 31, 0, 175, 174, 1, 0, 0, 0, 175, 176, 1, 0, 0, 0, 176, 178, 1, 0,
  0, 0, 177, 179, 3, 64, 32, 0, 178, 177, 1, 0, 0, 0, 178, 179, 1, 0, 0, 0, 179, 181, 1, 0, 0, 0, 180, 182, 3, 44, 22,
  0, 181, 180, 1, 0, 0, 0, 181, 182, 1, 0, 0, 0, 182, 188, 1, 0, 0, 0, 183, 185, 3, 64, 32, 0, 184, 183, 1, 0, 0, 0,
  184, 185, 1, 0, 0, 0, 185, 186, 1, 0, 0, 0, 186, 188, 3, 18, 9, 0, 187, 151, 1, 0, 0, 0, 187, 184, 1, 0, 0, 0, 188,
  17, 1, 0, 0, 0, 189, 190, 3, 20, 10, 0, 190, 192, 3, 32, 16, 0, 191, 193, 3, 44, 22, 0, 192, 191, 1, 0, 0, 0, 192,
  193, 1, 0, 0, 0, 193, 208, 1, 0, 0, 0, 194, 196, 3, 62, 31, 0, 195, 194, 1, 0, 0, 0, 195, 196, 1, 0, 0, 0, 196, 198,
  1, 0, 0, 0, 197, 199, 3, 20, 10, 0, 198, 197, 1, 0, 0, 0, 198, 199, 1, 0, 0, 0, 199, 200, 1, 0, 0, 0, 200, 202, 3, 22,
  11, 0, 201, 203, 3, 44, 22, 0, 202, 201, 1, 0, 0, 0, 202, 203, 1, 0, 0, 0, 203, 205, 1, 0, 0, 0, 204, 206, 3, 62, 31,
  0, 205, 204, 1, 0, 0, 0, 205, 206, 1, 0, 0, 0, 206, 208, 1, 0, 0, 0, 207, 189, 1, 0, 0, 0, 207, 195, 1, 0, 0, 0, 208,
  19, 1, 0, 0, 0, 209, 210, 5, 24, 0, 0, 210, 212, 5, 5, 0, 0, 211, 213, 3, 64, 32, 0, 212, 211, 1, 0, 0, 0, 212, 213,
  1, 0, 0, 0, 213, 21, 1, 0, 0, 0, 214, 224, 3, 28, 14, 0, 215, 224, 3, 34, 17, 0, 216, 224, 3, 36, 18, 0, 217, 224, 3,
  38, 19, 0, 218, 224, 3, 42, 21, 0, 219, 224, 3, 40, 20, 0, 220, 224, 5, 7, 0, 0, 221, 224, 3, 24, 12, 0, 222, 224, 5,
  6, 0, 0, 223, 214, 1, 0, 0, 0, 223, 215, 1, 0, 0, 0, 223, 216, 1, 0, 0, 0, 223, 217, 1, 0, 0, 0, 223, 218, 1, 0, 0, 0,
  223, 219, 1, 0, 0, 0, 223, 220, 1, 0, 0, 0, 223, 221, 1, 0, 0, 0, 223, 222, 1, 0, 0, 0, 224, 23, 1, 0, 0, 0, 225, 226,
  5, 6, 0, 0, 226, 227, 5, 5, 0, 0, 227, 228, 5, 6, 0, 0, 228, 25, 1, 0, 0, 0, 229, 231, 7, 0, 0, 0, 230, 232, 3, 64,
  32, 0, 231, 230, 1, 0, 0, 0, 231, 232, 1, 0, 0, 0, 232, 233, 1, 0, 0, 0, 233, 234, 3, 30, 15, 0, 234, 235, 3, 64, 32,
  0, 235, 236, 5, 12, 0, 0, 236, 237, 3, 64, 32, 0, 237, 239, 3, 30, 15, 0, 238, 240, 3, 64, 32, 0, 239, 238, 1, 0, 0,
  0, 239, 240, 1, 0, 0, 0, 240, 241, 1, 0, 0, 0, 241, 242, 7, 1, 0, 0, 242, 27, 1, 0, 0, 0, 243, 244, 3, 26, 13, 0, 244,
  29, 1, 0, 0, 0, 245, 252, 3, 38, 19, 0, 246, 252, 3, 42, 21, 0, 247, 252, 3, 40, 20, 0, 248, 252, 3, 58, 29, 0, 249,
  252, 3, 36, 18, 0, 250, 252, 5, 6, 0, 0, 251, 245, 1, 0, 0, 0, 251, 246, 1, 0, 0, 0, 251, 247, 1, 0, 0, 0, 251, 248,
  1, 0, 0, 0, 251, 249, 1, 0, 0, 0, 251, 250, 1, 0, 0, 0, 252, 31, 1, 0, 0, 0, 253, 254, 5, 1, 0, 0, 254, 256, 3, 4, 2,
  0, 255, 257, 3, 64, 32, 0, 256, 255, 1, 0, 0, 0, 256, 257, 1, 0, 0, 0, 257, 258, 1, 0, 0, 0, 258, 259, 5, 2, 0, 0,
  259, 33, 1, 0, 0, 0, 260, 261, 7, 2, 0, 0, 261, 35, 1, 0, 0, 0, 262, 263, 7, 3, 0, 0, 263, 37, 1, 0, 0, 0, 264, 265,
  5, 25, 0, 0, 265, 39, 1, 0, 0, 0, 266, 267, 5, 27, 0, 0, 267, 41, 1, 0, 0, 0, 268, 269, 5, 26, 0, 0, 269, 43, 1, 0, 0,
  0, 270, 271, 3, 46, 23, 0, 271, 45, 1, 0, 0, 0, 272, 274, 3, 64, 32, 0, 273, 272, 1, 0, 0, 0, 273, 274, 1, 0, 0, 0,
  274, 275, 1, 0, 0, 0, 275, 276, 5, 10, 0, 0, 276, 47, 1, 0, 0, 0, 277, 279, 3, 64, 32, 0, 278, 277, 1, 0, 0, 0, 278,
  279, 1, 0, 0, 0, 279, 280, 1, 0, 0, 0, 280, 282, 5, 13, 0, 0, 281, 283, 3, 64, 32, 0, 282, 281, 1, 0, 0, 0, 282, 283,
  1, 0, 0, 0, 283, 284, 1, 0, 0, 0, 284, 290, 5, 15, 0, 0, 285, 287, 3, 64, 32, 0, 286, 285, 1, 0, 0, 0, 286, 287, 1, 0,
  0, 0, 287, 288, 1, 0, 0, 0, 288, 290, 5, 15, 0, 0, 289, 278, 1, 0, 0, 0, 289, 286, 1, 0, 0, 0, 290, 49, 1, 0, 0, 0,
  291, 293, 3, 64, 32, 0, 292, 291, 1, 0, 0, 0, 292, 293, 1, 0, 0, 0, 293, 294, 1, 0, 0, 0, 294, 295, 5, 13, 0, 0, 295,
  51, 1, 0, 0, 0, 296, 298, 3, 64, 32, 0, 297, 296, 1, 0, 0, 0, 297, 298, 1, 0, 0, 0, 298, 299, 1, 0, 0, 0, 299, 300, 5,
  14, 0, 0, 300, 53, 1, 0, 0, 0, 301, 303, 3, 64, 32, 0, 302, 301, 1, 0, 0, 0, 302, 303, 1, 0, 0, 0, 303, 304, 1, 0, 0,
  0, 304, 305, 5, 16, 0, 0, 305, 55, 1, 0, 0, 0, 306, 308, 3, 64, 32, 0, 307, 306, 1, 0, 0, 0, 307, 308, 1, 0, 0, 0,
  308, 309, 1, 0, 0, 0, 309, 310, 5, 17, 0, 0, 310, 57, 1, 0, 0, 0, 311, 312, 5, 23, 0, 0, 312, 59, 1, 0, 0, 0, 313,
  315, 3, 64, 32, 0, 314, 313, 1, 0, 0, 0, 314, 315, 1, 0, 0, 0, 315, 316, 1, 0, 0, 0, 316, 317, 7, 4, 0, 0, 317, 61, 1,
  0, 0, 0, 318, 320, 3, 64, 32, 0, 319, 318, 1, 0, 0, 0, 319, 320, 1, 0, 0, 0, 320, 321, 1, 0, 0, 0, 321, 323, 5, 21, 0,
  0, 322, 324, 3, 64, 32, 0, 323, 322, 1, 0, 0, 0, 323, 324, 1, 0, 0, 0, 324, 326, 1, 0, 0, 0, 325, 319, 1, 0, 0, 0,
  326, 327, 1, 0, 0, 0, 327, 325, 1, 0, 0, 0, 327, 328, 1, 0, 0, 0, 328, 63, 1, 0, 0, 0, 329, 331, 5, 20, 0, 0, 330,
  329, 1, 0, 0, 0, 331, 332, 1, 0, 0, 0, 332, 330, 1, 0, 0, 0, 332, 333, 1, 0, 0, 0, 333, 65, 1, 0, 0, 0, 49, 68, 73,
  83, 93, 96, 104, 113, 122, 131, 140, 148, 151, 154, 157, 160, 164, 168, 172, 175, 178, 181, 184, 187, 192, 195, 198,
  202, 205, 207, 212, 223, 231, 239, 251, 256, 273, 278, 282, 286, 289, 292, 297, 302, 307, 314, 319, 323, 327, 332,
];

const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map((ds, index) => new antlr4.dfa.DFA(ds, index));

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ResearchAdvanceQLParser extends antlr4.Parser {
  static grammarFileName = 'ResearchAdvanceQL.g4';
  static literalNames = [
    null,
    "'('",
    "')'",
    "'['",
    "']'",
    "':'",
    "'*'",
    null,
    "'{'",
    "'}'",
    null,
    null,
    "'TO'",
    "'AND'",
    "'OR'",
    "'NOT'",
  ];
  static symbolicNames = [
    null,
    'LPAREN',
    'RPAREN',
    'LBRACK',
    'RBRACK',
    'COLON',
    'STAR',
    'QMARK',
    'LCURLY',
    'RCURLY',
    'TILDE',
    'DQUOTE',
    'TO',
    'AND',
    'OR',
    'NOT',
    'NEAR',
    'ONEAR',
    'KEYWORD_LIST_OR',
    'KEYWORD_LIST_AND',
    'WS',
    'PHRASE_COMMENT',
    'NUMBER',
    'DATE_TOKEN',
    'TERM_NORMAL',
    'TERM_WILDCARD',
    'PHRASE',
    'PHRASE_ANYTHING',
    'LINE_COMMENT',
    'MULTI_LINE_COMMENT',
    'OPERATOR',
    'ATOM',
    'MODIFIER',
    'TMODIFIER',
    'CLAUSE',
    'FIELD',
    'FUZZY',
    'BOOST',
    'QNORMAL',
    'QPHRASE',
    'QPHRASETRUNC',
    'QTRUNCATED',
    'QRANGEIN',
    'QRANGEEX',
    'QANYTHING',
    'QDATE',
  ];
  static ruleNames = [
    'mainQ',
    'query',
    'clauseOr',
    'clauseAnd',
    'clauseNot',
    'clauseNear',
    'clauseONear',
    'operator',
    'clauseBasic',
    'atom',
    'field',
    'value',
    'anything',
    'two_sided_range_term',
    'range_term',
    'range_value',
    'multi_value',
    'keyword_list',
    'normal',
    'wildcard',
    'quoted_truncated',
    'quoted',
    'term_modifier',
    'proximity',
    'not_',
    'and_',
    'or_',
    'near_',
    'onear_',
    'date',
    'comment',
    'phraseComment',
    'sep',
  ];

  constructor(input) {
    super(input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ResearchAdvanceQLParser.ruleNames;
    this.literalNames = ResearchAdvanceQLParser.literalNames;
    this.symbolicNames = ResearchAdvanceQLParser.symbolicNames;
  }

  get atn() {
    return atn;
  }

  mainQ() {
    let localctx = new MainQContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ResearchAdvanceQLParser.RULE_mainQ);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 68;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 0, this._ctx);
      if (la_ === 1) {
        this.state = 66;
        this.sep();
      } else if (la_ === 2) {
        this.state = 67;
        this.comment();
      }
      this.state = 70;
      localctx.clause = this.query();
      this.state = 73;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 1, this._ctx);
      if (la_ === 1) {
        this.state = 71;
        this.sep();
      } else if (la_ === 2) {
        this.state = 72;
        this.comment();
      }
      this.state = 75;
      this.match(ResearchAdvanceQLParser.EOF);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  query() {
    let localctx = new QueryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ResearchAdvanceQLParser.RULE_query);
    try {
      this.state = 96;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 4, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 77;
          this.clauseOr();
          this.state = 83;
          this._errHandler.sync(this);
          var _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
          while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
              this.state = 78;
              this.operator();
              this.state = 79;
              this.clauseOr();
            }
            this.state = 85;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
          }

          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 86;
          this.not_();
          this.state = 87;
          this.clauseBasic();
          this.state = 93;
          this._errHandler.sync(this);
          var _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
          while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if (_alt === 1) {
              this.state = 88;
              this.not_();
              this.state = 89;
              this.clauseBasic();
            }
            this.state = 95;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
          }

          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  clauseOr() {
    let localctx = new ClauseOrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ResearchAdvanceQLParser.RULE_clauseOr);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 98;
      this.clauseAnd();
      this.state = 104;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
      while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          this.state = 99;
          this.or_();
          this.state = 100;
          this.clauseAnd();
        }
        this.state = 106;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  clauseAnd() {
    let localctx = new ClauseAndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ResearchAdvanceQLParser.RULE_clauseAnd);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 107;
      this.clauseNot();
      this.state = 113;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
      while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          this.state = 108;
          this.and_();
          this.state = 109;
          this.clauseNot();
        }
        this.state = 115;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 6, this._ctx);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  clauseNot() {
    let localctx = new ClauseNotContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ResearchAdvanceQLParser.RULE_clauseNot);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 116;
      this.clauseNear();
      this.state = 122;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
      while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          this.state = 117;
          this.not_();
          this.state = 118;
          this.clauseNear();
        }
        this.state = 124;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  clauseNear() {
    let localctx = new ClauseNearContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ResearchAdvanceQLParser.RULE_clauseNear);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 125;
      this.clauseONear();
      this.state = 131;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
      while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          this.state = 126;
          this.near_();
          this.state = 127;
          this.clauseONear();
        }
        this.state = 133;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 8, this._ctx);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  clauseONear() {
    let localctx = new ClauseONearContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ResearchAdvanceQLParser.RULE_clauseONear);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 134;
      this.clauseBasic();
      this.state = 140;
      this._errHandler.sync(this);
      var _alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
      while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER) {
        if (_alt === 1) {
          this.state = 135;
          this.onear_();
          this.state = 136;
          this.clauseBasic();
        }
        this.state = 142;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  operator() {
    let localctx = new OperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ResearchAdvanceQLParser.RULE_operator);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 148;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 10, this._ctx);
      switch (la_) {
        case 1:
          this.state = 143;
          this.or_();
          break;

        case 2:
          this.state = 144;
          this.and_();
          break;

        case 3:
          this.state = 145;
          this.not_();
          break;

        case 4:
          this.state = 146;
          this.near_();
          break;

        case 5:
          this.state = 147;
          this.onear_();
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  clauseBasic() {
    let localctx = new ClauseBasicContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ResearchAdvanceQLParser.RULE_clauseBasic);
    var _la = 0; // Token type
    try {
      this.state = 187;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 22, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 151;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 11, this._ctx);
          if (la_ === 1) {
            this.state = 150;
            this.sep();
          }
          this.state = 154;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 12, this._ctx);
          if (la_ === 1) {
            this.state = 153;
            this.operator();
          }
          this.state = 157;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 13, this._ctx);
          if (la_ === 1) {
            this.state = 156;
            this.phraseComment();
          }
          this.state = 160;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === ResearchAdvanceQLParser.WS) {
            this.state = 159;
            this.sep();
          }

          this.state = 162;
          this.match(ResearchAdvanceQLParser.LPAREN);
          this.state = 164;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 15, this._ctx);
          if (la_ === 1) {
            this.state = 163;
            this.sep();
          }
          this.state = 166;
          this.clauseOr();
          this.state = 168;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === ResearchAdvanceQLParser.WS) {
            this.state = 167;
            this.sep();
          }

          this.state = 170;
          this.match(ResearchAdvanceQLParser.RPAREN);
          this.state = 172;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 17, this._ctx);
          if (la_ === 1) {
            this.state = 171;
            this.sep();
          }
          this.state = 175;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 18, this._ctx);
          if (la_ === 1) {
            this.state = 174;
            this.phraseComment();
          }
          this.state = 178;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 19, this._ctx);
          if (la_ === 1) {
            this.state = 177;
            this.sep();
          }
          this.state = 181;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 20, this._ctx);
          if (la_ === 1) {
            this.state = 180;
            this.term_modifier();
          }
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 184;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 21, this._ctx);
          if (la_ === 1) {
            this.state = 183;
            this.sep();
          }
          this.state = 186;
          this.atom();
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  atom() {
    let localctx = new AtomContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ResearchAdvanceQLParser.RULE_atom);
    var _la = 0; // Token type
    try {
      this.state = 207;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 28, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 189;
          this.field();
          this.state = 190;
          this.multi_value();
          this.state = 192;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 23, this._ctx);
          if (la_ === 1) {
            this.state = 191;
            this.term_modifier();
          }
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 195;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === ResearchAdvanceQLParser.WS || _la === ResearchAdvanceQLParser.PHRASE_COMMENT) {
            this.state = 194;
            this.phraseComment();
          }

          this.state = 198;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 25, this._ctx);
          if (la_ === 1) {
            this.state = 197;
            this.field();
          }
          this.state = 200;
          this.value();
          this.state = 202;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 26, this._ctx);
          if (la_ === 1) {
            this.state = 201;
            this.term_modifier();
          }
          this.state = 205;
          this._errHandler.sync(this);
          var la_ = this._interp.adaptivePredict(this._input, 27, this._ctx);
          if (la_ === 1) {
            this.state = 204;
            this.phraseComment();
          }
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  field() {
    let localctx = new FieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ResearchAdvanceQLParser.RULE_field);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 209;
      this.match(ResearchAdvanceQLParser.TERM_NORMAL);
      this.state = 210;
      this.match(ResearchAdvanceQLParser.COLON);
      this.state = 212;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === ResearchAdvanceQLParser.WS) {
        this.state = 211;
        this.sep();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  value() {
    let localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ResearchAdvanceQLParser.RULE_value);
    try {
      this.state = 223;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 30, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 214;
          this.range_term();
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 215;
          this.keyword_list();
          break;

        case 3:
          this.enterOuterAlt(localctx, 3);
          this.state = 216;
          this.normal();
          break;

        case 4:
          this.enterOuterAlt(localctx, 4);
          this.state = 217;
          this.wildcard();
          break;

        case 5:
          this.enterOuterAlt(localctx, 5);
          this.state = 218;
          this.quoted();
          break;

        case 6:
          this.enterOuterAlt(localctx, 6);
          this.state = 219;
          this.quoted_truncated();
          break;

        case 7:
          this.enterOuterAlt(localctx, 7);
          this.state = 220;
          this.match(ResearchAdvanceQLParser.QMARK);
          break;

        case 8:
          this.enterOuterAlt(localctx, 8);
          this.state = 221;
          this.anything();
          break;

        case 9:
          this.enterOuterAlt(localctx, 9);
          this.state = 222;
          this.match(ResearchAdvanceQLParser.STAR);
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  anything() {
    let localctx = new AnythingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ResearchAdvanceQLParser.RULE_anything);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 225;
      this.match(ResearchAdvanceQLParser.STAR);
      this.state = 226;
      this.match(ResearchAdvanceQLParser.COLON);
      this.state = 227;
      this.match(ResearchAdvanceQLParser.STAR);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  two_sided_range_term() {
    let localctx = new Two_sided_range_termContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ResearchAdvanceQLParser.RULE_two_sided_range_term);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 229;
      localctx.start_type = this._input.LT(1);
      _la = this._input.LA(1);
      if (!(_la === ResearchAdvanceQLParser.LBRACK || _la === ResearchAdvanceQLParser.LCURLY)) {
        localctx.start_type = this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
      this.state = 231;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === ResearchAdvanceQLParser.WS) {
        this.state = 230;
        this.sep();
      }

      this.state = 233;
      localctx.a = this.range_value();
      this.state = 234;
      this.sep();
      this.state = 235;
      this.match(ResearchAdvanceQLParser.TO);
      this.state = 236;
      this.sep();

      this.state = 237;
      localctx.b = this.range_value();
      this.state = 239;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === ResearchAdvanceQLParser.WS) {
        this.state = 238;
        this.sep();
      }

      this.state = 241;
      localctx.end_type = this._input.LT(1);
      _la = this._input.LA(1);
      if (!(_la === ResearchAdvanceQLParser.RBRACK || _la === ResearchAdvanceQLParser.RCURLY)) {
        localctx.end_type = this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  range_term() {
    let localctx = new Range_termContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, ResearchAdvanceQLParser.RULE_range_term);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 243;
      this.two_sided_range_term();
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  range_value() {
    let localctx = new Range_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, ResearchAdvanceQLParser.RULE_range_value);
    try {
      this.state = 251;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case ResearchAdvanceQLParser.TERM_WILDCARD:
          this.enterOuterAlt(localctx, 1);
          this.state = 245;
          this.wildcard();
          break;
        case ResearchAdvanceQLParser.PHRASE:
          this.enterOuterAlt(localctx, 2);
          this.state = 246;
          this.quoted();
          break;
        case ResearchAdvanceQLParser.PHRASE_ANYTHING:
          this.enterOuterAlt(localctx, 3);
          this.state = 247;
          this.quoted_truncated();
          break;
        case ResearchAdvanceQLParser.DATE_TOKEN:
          this.enterOuterAlt(localctx, 4);
          this.state = 248;
          this.date();
          break;
        case ResearchAdvanceQLParser.NUMBER:
        case ResearchAdvanceQLParser.TERM_NORMAL:
          this.enterOuterAlt(localctx, 5);
          this.state = 249;
          this.normal();
          break;
        case ResearchAdvanceQLParser.STAR:
          this.enterOuterAlt(localctx, 6);
          this.state = 250;
          this.match(ResearchAdvanceQLParser.STAR);
          break;
        default:
          throw new antlr4.error.NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  multi_value() {
    let localctx = new Multi_valueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, ResearchAdvanceQLParser.RULE_multi_value);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 253;
      this.match(ResearchAdvanceQLParser.LPAREN);

      this.state = 254;
      this.clauseOr();
      this.state = 256;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === ResearchAdvanceQLParser.WS) {
        this.state = 255;
        this.sep();
      }

      this.state = 258;
      this.match(ResearchAdvanceQLParser.RPAREN);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  keyword_list() {
    let localctx = new Keyword_listContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, ResearchAdvanceQLParser.RULE_keyword_list);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 260;
      _la = this._input.LA(1);
      if (!(_la === ResearchAdvanceQLParser.KEYWORD_LIST_OR || _la === ResearchAdvanceQLParser.KEYWORD_LIST_AND)) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  normal() {
    let localctx = new NormalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, ResearchAdvanceQLParser.RULE_normal);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 262;
      _la = this._input.LA(1);
      if (!(_la === ResearchAdvanceQLParser.NUMBER || _la === ResearchAdvanceQLParser.TERM_NORMAL)) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  wildcard() {
    let localctx = new WildcardContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, ResearchAdvanceQLParser.RULE_wildcard);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 264;
      this.match(ResearchAdvanceQLParser.TERM_WILDCARD);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  quoted_truncated() {
    let localctx = new Quoted_truncatedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, ResearchAdvanceQLParser.RULE_quoted_truncated);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 266;
      this.match(ResearchAdvanceQLParser.PHRASE_ANYTHING);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  quoted() {
    let localctx = new QuotedContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, ResearchAdvanceQLParser.RULE_quoted);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 268;
      this.match(ResearchAdvanceQLParser.PHRASE);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  term_modifier() {
    let localctx = new Term_modifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, ResearchAdvanceQLParser.RULE_term_modifier);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 270;
      this.proximity();
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  proximity() {
    let localctx = new ProximityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, ResearchAdvanceQLParser.RULE_proximity);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 273;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === ResearchAdvanceQLParser.WS) {
        this.state = 272;
        this.sep();
      }

      this.state = 275;
      this.match(ResearchAdvanceQLParser.TILDE);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  not_() {
    let localctx = new Not_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 48, ResearchAdvanceQLParser.RULE_not_);
    var _la = 0; // Token type
    try {
      this.state = 289;
      this._errHandler.sync(this);
      var la_ = this._interp.adaptivePredict(this._input, 39, this._ctx);
      switch (la_) {
        case 1:
          this.enterOuterAlt(localctx, 1);
          this.state = 278;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === ResearchAdvanceQLParser.WS) {
            this.state = 277;
            this.sep();
          }

          this.state = 280;
          this.match(ResearchAdvanceQLParser.AND);
          this.state = 282;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === ResearchAdvanceQLParser.WS) {
            this.state = 281;
            this.sep();
          }

          this.state = 284;
          this.match(ResearchAdvanceQLParser.NOT);
          break;

        case 2:
          this.enterOuterAlt(localctx, 2);
          this.state = 286;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
          if (_la === ResearchAdvanceQLParser.WS) {
            this.state = 285;
            this.sep();
          }

          this.state = 288;
          this.match(ResearchAdvanceQLParser.NOT);
          break;
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  and_() {
    let localctx = new And_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 50, ResearchAdvanceQLParser.RULE_and_);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 292;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === ResearchAdvanceQLParser.WS) {
        this.state = 291;
        this.sep();
      }

      this.state = 294;
      this.match(ResearchAdvanceQLParser.AND);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  or_() {
    let localctx = new Or_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 52, ResearchAdvanceQLParser.RULE_or_);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 297;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === ResearchAdvanceQLParser.WS) {
        this.state = 296;
        this.sep();
      }

      this.state = 299;
      this.match(ResearchAdvanceQLParser.OR);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  near_() {
    let localctx = new Near_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 54, ResearchAdvanceQLParser.RULE_near_);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 302;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === ResearchAdvanceQLParser.WS) {
        this.state = 301;
        this.sep();
      }

      this.state = 304;
      this.match(ResearchAdvanceQLParser.NEAR);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  onear_() {
    let localctx = new Onear_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 56, ResearchAdvanceQLParser.RULE_onear_);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 307;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === ResearchAdvanceQLParser.WS) {
        this.state = 306;
        this.sep();
      }

      this.state = 309;
      this.match(ResearchAdvanceQLParser.ONEAR);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  date() {
    let localctx = new DateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, ResearchAdvanceQLParser.RULE_date);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 311;
      this.match(ResearchAdvanceQLParser.DATE_TOKEN);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  comment() {
    let localctx = new CommentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, ResearchAdvanceQLParser.RULE_comment);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 314;
      this._errHandler.sync(this);
      _la = this._input.LA(1);
      if (_la === ResearchAdvanceQLParser.WS) {
        this.state = 313;
        this.sep();
      }

      this.state = 316;
      _la = this._input.LA(1);
      if (
        !(
          (_la & ~0x1f) == 0 &&
          ((1 << _la) &
            ((1 << ResearchAdvanceQLParser.PHRASE_COMMENT) |
              (1 << ResearchAdvanceQLParser.LINE_COMMENT) |
              (1 << ResearchAdvanceQLParser.MULTI_LINE_COMMENT))) !==
            0
        )
      ) {
        this._errHandler.recoverInline(this);
      } else {
        this._errHandler.reportMatch(this);
        this.consume();
      }
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  phraseComment() {
    let localctx = new PhraseCommentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, ResearchAdvanceQLParser.RULE_phraseComment);
    var _la = 0; // Token type
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 325;
      this._errHandler.sync(this);
      var _alt = 1;
      do {
        switch (_alt) {
          case 1:
            this.state = 319;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === ResearchAdvanceQLParser.WS) {
              this.state = 318;
              this.sep();
            }

            this.state = 321;
            this.match(ResearchAdvanceQLParser.PHRASE_COMMENT);
            this.state = 323;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input, 46, this._ctx);
            if (la_ === 1) {
              this.state = 322;
              this.sep();
            }
            break;
          default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 327;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 47, this._ctx);
      } while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }

  sep() {
    let localctx = new SepContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, ResearchAdvanceQLParser.RULE_sep);
    try {
      this.enterOuterAlt(localctx, 1);
      this.state = 330;
      this._errHandler.sync(this);
      var _alt = 1;
      do {
        switch (_alt) {
          case 1:
            this.state = 329;
            this.match(ResearchAdvanceQLParser.WS);
            break;
          default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 332;
        this._errHandler.sync(this);
        _alt = this._interp.adaptivePredict(this._input, 48, this._ctx);
      } while (_alt != 2 && _alt != antlr4.atn.ATN.INVALID_ALT_NUMBER);
    } catch (re) {
      if (re instanceof antlr4.error.RecognitionException) {
        localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return localctx;
  }
}

ResearchAdvanceQLParser.EOF = antlr4.Token.EOF;
ResearchAdvanceQLParser.LPAREN = 1;
ResearchAdvanceQLParser.RPAREN = 2;
ResearchAdvanceQLParser.LBRACK = 3;
ResearchAdvanceQLParser.RBRACK = 4;
ResearchAdvanceQLParser.COLON = 5;
ResearchAdvanceQLParser.STAR = 6;
ResearchAdvanceQLParser.QMARK = 7;
ResearchAdvanceQLParser.LCURLY = 8;
ResearchAdvanceQLParser.RCURLY = 9;
ResearchAdvanceQLParser.TILDE = 10;
ResearchAdvanceQLParser.DQUOTE = 11;
ResearchAdvanceQLParser.TO = 12;
ResearchAdvanceQLParser.AND = 13;
ResearchAdvanceQLParser.OR = 14;
ResearchAdvanceQLParser.NOT = 15;
ResearchAdvanceQLParser.NEAR = 16;
ResearchAdvanceQLParser.ONEAR = 17;
ResearchAdvanceQLParser.KEYWORD_LIST_OR = 18;
ResearchAdvanceQLParser.KEYWORD_LIST_AND = 19;
ResearchAdvanceQLParser.WS = 20;
ResearchAdvanceQLParser.PHRASE_COMMENT = 21;
ResearchAdvanceQLParser.NUMBER = 22;
ResearchAdvanceQLParser.DATE_TOKEN = 23;
ResearchAdvanceQLParser.TERM_NORMAL = 24;
ResearchAdvanceQLParser.TERM_WILDCARD = 25;
ResearchAdvanceQLParser.PHRASE = 26;
ResearchAdvanceQLParser.PHRASE_ANYTHING = 27;
ResearchAdvanceQLParser.LINE_COMMENT = 28;
ResearchAdvanceQLParser.MULTI_LINE_COMMENT = 29;
ResearchAdvanceQLParser.OPERATOR = 30;
ResearchAdvanceQLParser.ATOM = 31;
ResearchAdvanceQLParser.MODIFIER = 32;
ResearchAdvanceQLParser.TMODIFIER = 33;
ResearchAdvanceQLParser.CLAUSE = 34;
ResearchAdvanceQLParser.FIELD = 35;
ResearchAdvanceQLParser.FUZZY = 36;
ResearchAdvanceQLParser.BOOST = 37;
ResearchAdvanceQLParser.QNORMAL = 38;
ResearchAdvanceQLParser.QPHRASE = 39;
ResearchAdvanceQLParser.QPHRASETRUNC = 40;
ResearchAdvanceQLParser.QTRUNCATED = 41;
ResearchAdvanceQLParser.QRANGEIN = 42;
ResearchAdvanceQLParser.QRANGEEX = 43;
ResearchAdvanceQLParser.QANYTHING = 44;
ResearchAdvanceQLParser.QDATE = 45;

ResearchAdvanceQLParser.RULE_mainQ = 0;
ResearchAdvanceQLParser.RULE_query = 1;
ResearchAdvanceQLParser.RULE_clauseOr = 2;
ResearchAdvanceQLParser.RULE_clauseAnd = 3;
ResearchAdvanceQLParser.RULE_clauseNot = 4;
ResearchAdvanceQLParser.RULE_clauseNear = 5;
ResearchAdvanceQLParser.RULE_clauseONear = 6;
ResearchAdvanceQLParser.RULE_operator = 7;
ResearchAdvanceQLParser.RULE_clauseBasic = 8;
ResearchAdvanceQLParser.RULE_atom = 9;
ResearchAdvanceQLParser.RULE_field = 10;
ResearchAdvanceQLParser.RULE_value = 11;
ResearchAdvanceQLParser.RULE_anything = 12;
ResearchAdvanceQLParser.RULE_two_sided_range_term = 13;
ResearchAdvanceQLParser.RULE_range_term = 14;
ResearchAdvanceQLParser.RULE_range_value = 15;
ResearchAdvanceQLParser.RULE_multi_value = 16;
ResearchAdvanceQLParser.RULE_keyword_list = 17;
ResearchAdvanceQLParser.RULE_normal = 18;
ResearchAdvanceQLParser.RULE_wildcard = 19;
ResearchAdvanceQLParser.RULE_quoted_truncated = 20;
ResearchAdvanceQLParser.RULE_quoted = 21;
ResearchAdvanceQLParser.RULE_term_modifier = 22;
ResearchAdvanceQLParser.RULE_proximity = 23;
ResearchAdvanceQLParser.RULE_not_ = 24;
ResearchAdvanceQLParser.RULE_and_ = 25;
ResearchAdvanceQLParser.RULE_or_ = 26;
ResearchAdvanceQLParser.RULE_near_ = 27;
ResearchAdvanceQLParser.RULE_onear_ = 28;
ResearchAdvanceQLParser.RULE_date = 29;
ResearchAdvanceQLParser.RULE_comment = 30;
ResearchAdvanceQLParser.RULE_phraseComment = 31;
ResearchAdvanceQLParser.RULE_sep = 32;

class MainQContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_mainQ;
    this.clause = null; // QueryContext
  }

  EOF() {
    return this.getToken(ResearchAdvanceQLParser.EOF, 0);
  }

  query() {
    return this.getTypedRuleContext(QueryContext, 0);
  }

  sep = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(SepContext);
    } else {
      return this.getTypedRuleContext(SepContext, i);
    }
  };

  comment = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(CommentContext);
    } else {
      return this.getTypedRuleContext(CommentContext, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterMainQ(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitMainQ(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitMainQ(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class QueryContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_query;
  }

  clauseOr = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ClauseOrContext);
    } else {
      return this.getTypedRuleContext(ClauseOrContext, i);
    }
  };

  operator = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(OperatorContext);
    } else {
      return this.getTypedRuleContext(OperatorContext, i);
    }
  };

  not_ = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Not_Context);
    } else {
      return this.getTypedRuleContext(Not_Context, i);
    }
  };

  clauseBasic = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ClauseBasicContext);
    } else {
      return this.getTypedRuleContext(ClauseBasicContext, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterQuery(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitQuery(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitQuery(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ClauseOrContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_clauseOr;
  }

  clauseAnd = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ClauseAndContext);
    } else {
      return this.getTypedRuleContext(ClauseAndContext, i);
    }
  };

  or_ = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Or_Context);
    } else {
      return this.getTypedRuleContext(Or_Context, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterClauseOr(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitClauseOr(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitClauseOr(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ClauseAndContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_clauseAnd;
  }

  clauseNot = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ClauseNotContext);
    } else {
      return this.getTypedRuleContext(ClauseNotContext, i);
    }
  };

  and_ = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(And_Context);
    } else {
      return this.getTypedRuleContext(And_Context, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterClauseAnd(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitClauseAnd(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitClauseAnd(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ClauseNotContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_clauseNot;
  }

  clauseNear = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ClauseNearContext);
    } else {
      return this.getTypedRuleContext(ClauseNearContext, i);
    }
  };

  not_ = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Not_Context);
    } else {
      return this.getTypedRuleContext(Not_Context, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterClauseNot(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitClauseNot(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitClauseNot(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ClauseNearContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_clauseNear;
  }

  clauseONear = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ClauseONearContext);
    } else {
      return this.getTypedRuleContext(ClauseONearContext, i);
    }
  };

  near_ = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Near_Context);
    } else {
      return this.getTypedRuleContext(Near_Context, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterClauseNear(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitClauseNear(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitClauseNear(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ClauseONearContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_clauseONear;
  }

  clauseBasic = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(ClauseBasicContext);
    } else {
      return this.getTypedRuleContext(ClauseBasicContext, i);
    }
  };

  onear_ = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Onear_Context);
    } else {
      return this.getTypedRuleContext(Onear_Context, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterClauseONear(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitClauseONear(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitClauseONear(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class OperatorContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_operator;
  }

  or_() {
    return this.getTypedRuleContext(Or_Context, 0);
  }

  and_() {
    return this.getTypedRuleContext(And_Context, 0);
  }

  not_() {
    return this.getTypedRuleContext(Not_Context, 0);
  }

  near_() {
    return this.getTypedRuleContext(Near_Context, 0);
  }

  onear_() {
    return this.getTypedRuleContext(Onear_Context, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterOperator(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitOperator(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitOperator(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ClauseBasicContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_clauseBasic;
  }

  LPAREN() {
    return this.getToken(ResearchAdvanceQLParser.LPAREN, 0);
  }

  clauseOr() {
    return this.getTypedRuleContext(ClauseOrContext, 0);
  }

  RPAREN() {
    return this.getToken(ResearchAdvanceQLParser.RPAREN, 0);
  }

  sep = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(SepContext);
    } else {
      return this.getTypedRuleContext(SepContext, i);
    }
  };

  operator() {
    return this.getTypedRuleContext(OperatorContext, 0);
  }

  phraseComment = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(PhraseCommentContext);
    } else {
      return this.getTypedRuleContext(PhraseCommentContext, i);
    }
  };

  term_modifier() {
    return this.getTypedRuleContext(Term_modifierContext, 0);
  }

  atom() {
    return this.getTypedRuleContext(AtomContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterClauseBasic(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitClauseBasic(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitClauseBasic(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class AtomContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_atom;
  }

  field() {
    return this.getTypedRuleContext(FieldContext, 0);
  }

  multi_value() {
    return this.getTypedRuleContext(Multi_valueContext, 0);
  }

  term_modifier() {
    return this.getTypedRuleContext(Term_modifierContext, 0);
  }

  value() {
    return this.getTypedRuleContext(ValueContext, 0);
  }

  phraseComment = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(PhraseCommentContext);
    } else {
      return this.getTypedRuleContext(PhraseCommentContext, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterAtom(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitAtom(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitAtom(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class FieldContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_field;
  }

  TERM_NORMAL() {
    return this.getToken(ResearchAdvanceQLParser.TERM_NORMAL, 0);
  }

  COLON() {
    return this.getToken(ResearchAdvanceQLParser.COLON, 0);
  }

  sep() {
    return this.getTypedRuleContext(SepContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterField(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitField(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitField(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ValueContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_value;
  }

  range_term() {
    return this.getTypedRuleContext(Range_termContext, 0);
  }

  keyword_list() {
    return this.getTypedRuleContext(Keyword_listContext, 0);
  }

  normal() {
    return this.getTypedRuleContext(NormalContext, 0);
  }

  wildcard() {
    return this.getTypedRuleContext(WildcardContext, 0);
  }

  quoted() {
    return this.getTypedRuleContext(QuotedContext, 0);
  }

  quoted_truncated() {
    return this.getTypedRuleContext(Quoted_truncatedContext, 0);
  }

  QMARK() {
    return this.getToken(ResearchAdvanceQLParser.QMARK, 0);
  }

  anything() {
    return this.getTypedRuleContext(AnythingContext, 0);
  }

  STAR() {
    return this.getToken(ResearchAdvanceQLParser.STAR, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterValue(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitValue(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitValue(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class AnythingContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_anything;
  }

  STAR = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(ResearchAdvanceQLParser.STAR);
    } else {
      return this.getToken(ResearchAdvanceQLParser.STAR, i);
    }
  };

  COLON() {
    return this.getToken(ResearchAdvanceQLParser.COLON, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterAnything(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitAnything(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitAnything(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class Two_sided_range_termContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_two_sided_range_term;
    this.start_type = null; // Token
    this.a = null; // Range_valueContext
    this.b = null; // Range_valueContext
    this.end_type = null; // Token
  }

  sep = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(SepContext);
    } else {
      return this.getTypedRuleContext(SepContext, i);
    }
  };

  TO() {
    return this.getToken(ResearchAdvanceQLParser.TO, 0);
  }

  LBRACK() {
    return this.getToken(ResearchAdvanceQLParser.LBRACK, 0);
  }

  LCURLY() {
    return this.getToken(ResearchAdvanceQLParser.LCURLY, 0);
  }

  RBRACK() {
    return this.getToken(ResearchAdvanceQLParser.RBRACK, 0);
  }

  RCURLY() {
    return this.getToken(ResearchAdvanceQLParser.RCURLY, 0);
  }

  range_value = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(Range_valueContext);
    } else {
      return this.getTypedRuleContext(Range_valueContext, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterTwo_sided_range_term(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitTwo_sided_range_term(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitTwo_sided_range_term(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class Range_termContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_range_term;
  }

  two_sided_range_term() {
    return this.getTypedRuleContext(Two_sided_range_termContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterRange_term(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitRange_term(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitRange_term(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class Range_valueContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_range_value;
  }

  wildcard() {
    return this.getTypedRuleContext(WildcardContext, 0);
  }

  quoted() {
    return this.getTypedRuleContext(QuotedContext, 0);
  }

  quoted_truncated() {
    return this.getTypedRuleContext(Quoted_truncatedContext, 0);
  }

  date() {
    return this.getTypedRuleContext(DateContext, 0);
  }

  normal() {
    return this.getTypedRuleContext(NormalContext, 0);
  }

  STAR() {
    return this.getToken(ResearchAdvanceQLParser.STAR, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterRange_value(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitRange_value(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitRange_value(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class Multi_valueContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_multi_value;
  }

  LPAREN() {
    return this.getToken(ResearchAdvanceQLParser.LPAREN, 0);
  }

  RPAREN() {
    return this.getToken(ResearchAdvanceQLParser.RPAREN, 0);
  }

  clauseOr() {
    return this.getTypedRuleContext(ClauseOrContext, 0);
  }

  sep() {
    return this.getTypedRuleContext(SepContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterMulti_value(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitMulti_value(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitMulti_value(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class Keyword_listContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_keyword_list;
  }

  KEYWORD_LIST_OR() {
    return this.getToken(ResearchAdvanceQLParser.KEYWORD_LIST_OR, 0);
  }

  KEYWORD_LIST_AND() {
    return this.getToken(ResearchAdvanceQLParser.KEYWORD_LIST_AND, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterKeyword_list(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitKeyword_list(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitKeyword_list(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class NormalContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_normal;
  }

  TERM_NORMAL() {
    return this.getToken(ResearchAdvanceQLParser.TERM_NORMAL, 0);
  }

  NUMBER() {
    return this.getToken(ResearchAdvanceQLParser.NUMBER, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterNormal(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitNormal(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitNormal(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class WildcardContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_wildcard;
  }

  TERM_WILDCARD() {
    return this.getToken(ResearchAdvanceQLParser.TERM_WILDCARD, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterWildcard(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitWildcard(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitWildcard(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class Quoted_truncatedContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_quoted_truncated;
  }

  PHRASE_ANYTHING() {
    return this.getToken(ResearchAdvanceQLParser.PHRASE_ANYTHING, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterQuoted_truncated(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitQuoted_truncated(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitQuoted_truncated(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class QuotedContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_quoted;
  }

  PHRASE() {
    return this.getToken(ResearchAdvanceQLParser.PHRASE, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterQuoted(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitQuoted(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitQuoted(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class Term_modifierContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_term_modifier;
  }

  proximity() {
    return this.getTypedRuleContext(ProximityContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterTerm_modifier(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitTerm_modifier(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitTerm_modifier(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class ProximityContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_proximity;
  }

  TILDE() {
    return this.getToken(ResearchAdvanceQLParser.TILDE, 0);
  }

  sep() {
    return this.getTypedRuleContext(SepContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterProximity(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitProximity(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitProximity(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class Not_Context extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_not_;
  }

  AND() {
    return this.getToken(ResearchAdvanceQLParser.AND, 0);
  }

  NOT() {
    return this.getToken(ResearchAdvanceQLParser.NOT, 0);
  }

  sep = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(SepContext);
    } else {
      return this.getTypedRuleContext(SepContext, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterNot_(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitNot_(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitNot_(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class And_Context extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_and_;
  }

  AND() {
    return this.getToken(ResearchAdvanceQLParser.AND, 0);
  }

  sep() {
    return this.getTypedRuleContext(SepContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterAnd_(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitAnd_(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitAnd_(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class Or_Context extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_or_;
  }

  OR() {
    return this.getToken(ResearchAdvanceQLParser.OR, 0);
  }

  sep() {
    return this.getTypedRuleContext(SepContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterOr_(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitOr_(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitOr_(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class Near_Context extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_near_;
  }

  NEAR() {
    return this.getToken(ResearchAdvanceQLParser.NEAR, 0);
  }

  sep() {
    return this.getTypedRuleContext(SepContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterNear_(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitNear_(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitNear_(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class Onear_Context extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_onear_;
  }

  ONEAR() {
    return this.getToken(ResearchAdvanceQLParser.ONEAR, 0);
  }

  sep() {
    return this.getTypedRuleContext(SepContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterOnear_(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitOnear_(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitOnear_(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class DateContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_date;
  }

  DATE_TOKEN() {
    return this.getToken(ResearchAdvanceQLParser.DATE_TOKEN, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterDate(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitDate(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitDate(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class CommentContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_comment;
  }

  PHRASE_COMMENT() {
    return this.getToken(ResearchAdvanceQLParser.PHRASE_COMMENT, 0);
  }

  LINE_COMMENT() {
    return this.getToken(ResearchAdvanceQLParser.LINE_COMMENT, 0);
  }

  MULTI_LINE_COMMENT() {
    return this.getToken(ResearchAdvanceQLParser.MULTI_LINE_COMMENT, 0);
  }

  sep() {
    return this.getTypedRuleContext(SepContext, 0);
  }

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterComment(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitComment(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitComment(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class PhraseCommentContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_phraseComment;
  }

  PHRASE_COMMENT = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(ResearchAdvanceQLParser.PHRASE_COMMENT);
    } else {
      return this.getToken(ResearchAdvanceQLParser.PHRASE_COMMENT, i);
    }
  };

  sep = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTypedRuleContexts(SepContext);
    } else {
      return this.getTypedRuleContext(SepContext, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterPhraseComment(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitPhraseComment(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitPhraseComment(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

class SepContext extends antlr4.ParserRuleContext {
  constructor(parser, parent, invokingState) {
    if (parent === undefined) {
      parent = null;
    }
    if (invokingState === undefined || invokingState === null) {
      invokingState = -1;
    }
    super(parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ResearchAdvanceQLParser.RULE_sep;
  }

  WS = function (i) {
    if (i === undefined) {
      i = null;
    }
    if (i === null) {
      return this.getTokens(ResearchAdvanceQLParser.WS);
    } else {
      return this.getToken(ResearchAdvanceQLParser.WS, i);
    }
  };

  enterRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.enterSep(this);
    }
  }

  exitRule(listener) {
    if (listener instanceof ResearchAdvanceQLListener) {
      listener.exitSep(this);
    }
  }

  accept(visitor) {
    if (visitor instanceof ResearchAdvanceQLVisitor) {
      return visitor.visitSep(this);
    } else {
      return visitor.visitChildren(this);
    }
  }
}

ResearchAdvanceQLParser.MainQContext = MainQContext;
ResearchAdvanceQLParser.QueryContext = QueryContext;
ResearchAdvanceQLParser.ClauseOrContext = ClauseOrContext;
ResearchAdvanceQLParser.ClauseAndContext = ClauseAndContext;
ResearchAdvanceQLParser.ClauseNotContext = ClauseNotContext;
ResearchAdvanceQLParser.ClauseNearContext = ClauseNearContext;
ResearchAdvanceQLParser.ClauseONearContext = ClauseONearContext;
ResearchAdvanceQLParser.OperatorContext = OperatorContext;
ResearchAdvanceQLParser.ClauseBasicContext = ClauseBasicContext;
ResearchAdvanceQLParser.AtomContext = AtomContext;
ResearchAdvanceQLParser.FieldContext = FieldContext;
ResearchAdvanceQLParser.ValueContext = ValueContext;
ResearchAdvanceQLParser.AnythingContext = AnythingContext;
ResearchAdvanceQLParser.Two_sided_range_termContext = Two_sided_range_termContext;
ResearchAdvanceQLParser.Range_termContext = Range_termContext;
ResearchAdvanceQLParser.Range_valueContext = Range_valueContext;
ResearchAdvanceQLParser.Multi_valueContext = Multi_valueContext;
ResearchAdvanceQLParser.Keyword_listContext = Keyword_listContext;
ResearchAdvanceQLParser.NormalContext = NormalContext;
ResearchAdvanceQLParser.WildcardContext = WildcardContext;
ResearchAdvanceQLParser.Quoted_truncatedContext = Quoted_truncatedContext;
ResearchAdvanceQLParser.QuotedContext = QuotedContext;
ResearchAdvanceQLParser.Term_modifierContext = Term_modifierContext;
ResearchAdvanceQLParser.ProximityContext = ProximityContext;
ResearchAdvanceQLParser.Not_Context = Not_Context;
ResearchAdvanceQLParser.And_Context = And_Context;
ResearchAdvanceQLParser.Or_Context = Or_Context;
ResearchAdvanceQLParser.Near_Context = Near_Context;
ResearchAdvanceQLParser.Onear_Context = Onear_Context;
ResearchAdvanceQLParser.DateContext = DateContext;
ResearchAdvanceQLParser.CommentContext = CommentContext;
ResearchAdvanceQLParser.PhraseCommentContext = PhraseCommentContext;
ResearchAdvanceQLParser.SepContext = SepContext;
