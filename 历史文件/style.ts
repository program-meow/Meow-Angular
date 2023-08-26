/**
 * 样式
 */
export class Style {

  /*-------------- Backgrounds( 背景属性 ) --------------*/

  /**
   * 简写属性，作用是将背景属性设置在一个声明中
   */
  background: any;
  /**
   * 背景图像是否固定或者随着页面的其余部分滚动
   * scroll ：背景图片随着页面的滚动而滚动，这是默认的
   * fixed ：背景图片不会随着页面的滚动而滚动
   * local ：背景图片会随着元素内容的滚动而滚动
   * initial ：设置该属性的默认值
   * inherit ：指定 background-attachment 的设置应该从父元素继承
   */
  'background-attachment': any;
  /**
   * 设置元素的背景颜色
   * color ：指定背景颜色 例：yellow、#00ff00、rgb(255,0,255)
   * transparent ：指定背景颜色应该是透明的。这是默认
   * inherit ：指定背景颜色，应该从父元素继承
   */
  'background-color': any;
  /**
   * 把图像设置为背景
   * url('URL') ：图像的URL
   * none ：无图像背景会显示。这是默认
   * linear-gradient() ：创建一个线性渐变的 "图像"(从上到下)
   * radial-gradient() ：用径向渐变创建 "图像"
   * repeating-linear-gradient() ：创建重复的线性渐变 "图像"
   * repeating-radial-gradient() ：创建重复的径向渐变 "图像"
   * inherit ：指定背景图像应该从父元素继承
   */
  'background-image': any;
  /**
   * 设置背景图像的起始位置
   * left top、left center、left bottom、right top、right center、right bottom、center top、center center、center bottom ：如果仅指定一个关键字，其他值将会是"center"
   * x% y% ：第一个值是水平位置，第二个值是垂直。左上角是0％0％。右下角是100％100％。如果仅指定了一个值，其他值将是50％。 。默认值为：0％0％
   * xpos ypos：第一个值是水平位置，第二个值是垂直。左上角是0。单位可以是像素（0px0px）或任何其他 CSS单位。如果仅指定了一个值，其他值将是50％。你可以混合使用％和positions
   * inherit：指定background-position属性设置应该从父元素继承
   */
  'background-position': any;
  /**
   * 设置背景图像是否及如何重复
   * repeat ：背景图像将向垂直和水平方向重复。这是默认
   * repeat-x ：只有水平位置会重复背景图像
   * repeat-y ：只有垂直位置会重复背景图像
   * no-repeat ：background-image 不会重复
   * inherit ：指定 background-repeat 属性设置应该从父元素继承
   */
  'background-repeat': any;

  /*-------------- Text( 文本 ) --------------*/

  /**
   * 设置文本颜色
   */
  color: any;
  /**
   * 设置文本方向
   * ltr ：默认。文本方向从左到右
   * rtl ：文本方向从右到左
   * inherit ：规定应该从父元素继承 direction 属性的值
   */
  direction: any;
  /**
   * 设置字符间距
   */
  'letter-spacing': any;
  /**
   * 对齐元素中的文本
   */
  'text-align': any;
  /**
   * 向文本添加修饰
   */
  'text-decoration': any;
  /**
   * 缩进元素中文本的首行
   */
  'text-indent': any;
  /**
   * 设置文本阴影
   */
  'text-shadow': any;
  /**
   * 控制元素中的字母
   */
  'text-transform': any;
  /**
   * 设置或返回文本是否被重写 
   */
  'unicode-bidi': any;
  /**
   * 设置元素的垂直对齐
   */
  'vertical-align': any;
  /**
   * 设置元素中空白的处理方式
   */
  'white-space': any;
  /**
   * 设置字间距
   */
  'word-spacing': any;

  /*-------------- Fonts( 字体 ) --------------*/

  /**
   * 	在一个声明中设置所有的字体属性
   */
  font: any;
  /**
   * 指定文本的字体系列
   */
  'font-family': any;
  /**
   * 指定文本的字体大小
   */
  'font-size': any;
  /**
   * 指定文本的字体样式
   */
  'font-style': any;
  /**
   * 以小型大写字体或者正常字体显示文本
   */
  'font-variant': any;
  /**
   * 指定字体的粗细
   */
  'font-weight': any;

  /*-------------- ul ol ( 列表 ) --------------*/

  /**
   * 简写属性。用于把所有用于列表的属性设置于一个声明中
   */
  'list-style': any;
  /**
   * 将图像设置为列表项标志
   */
  'list-style-image': any;
  /**
   * 设置列表中列表项标志的位置
   */
  'list-style-position': any;
  /**
   * 设置列表项标志的类型
   */
  'list-style-type': any;

  /*-------------- Border( 边框 ) --------------*/

  /**
   * 简写属性，用于把针对四个边的属性设置在一个声明
   */
  border: any;
  /**
   * 	用于设置元素所有边框的样式，或者单独地为各边设置边框样式
   */
  'border-style': any;
  /**
   * 简写属性，用于为元素的所有边框设置宽度，或者单独地为各边边框设置宽度
   */
  'border-width': any;
  /**
   * 简写属性，设置元素的所有边框中可见部分的颜色，或为 4 个边分别设置颜色
   */
  'border-color': any;
  /**
   * 简写属性，用于把下边框的所有属性设置到一个声明中
   */
  'border-bottom': any;
  /**
   * 设置元素的下边框的颜色
   */
  'border-bottom-color': any;
  /**
   * 设置元素的下边框的样式
   */
  'border-bottom-style': any;
  /**
   * 设置元素的下边框的宽度
   */
  'border-bottom-width': any;
  /**
   * 简写属性，用于把左边框的所有属性设置到一个声明中
   */
  'border-left': any;
  /**
   * 设置元素的左边框的颜色
   */
  'border-left-color': any;
  /**
   * 设置元素的左边框的样式
   */
  'border-left-style': any;
  /**
   * 设置元素的左边框的宽度
   */
  'border-left-width': any;
  /**
   * 简写属性，用于把右边框的所有属性设置到一个声明中
   */
  'border-right': any;
  /**
   * 	设置元素的右边框的颜色
   */
  'border-right-color': any;
  /**
   * 设置元素的右边框的样式
   */
  'border-right-style': any;
  /**
   * 设置元素的右边框的宽度
   */
  'border-right-width': any;
  /**
   * 简写属性，用于把上边框的所有属性设置到一个声明中
   */
  'border-top': any;
  /**
   * 设置元素的上边框的颜色
   */
  'border-top-color': any;
  /**
   * 设置元素的上边框的样式
   */
  'border-top-style': any;
  /**
   * 设置元素的上边框的宽度
   */
  'border-top-width': any;
  /**
   * 设置圆角的边框
   */
  'border-radius': any;

  /*-------------- outline( 轮廓 ) --------------*/

  /**
   * 在一个声明中设置所有的轮廓属性
   */
  'outline': any;
  /**
   * 设置轮廓的颜色
   */
  'outline-color': any;
  /**
   * 设置轮廓的样式
   */
  'outline-style': any;
  /**
   * 设置轮廓的宽度
   */
  'outline-width': any;

  /*-------------- margin( 外边距 ) --------------*/

  /**
   * 简写属性。在一个声明中设置所有外边距属性
   */
  margin: any;
  /**
   * 设置元素的下外边距
   */
  'margin-bottom': any;
  /**
   * 设置元素的左外边距
   */
  'margin-left': any;
  /**
   * 设置元素的右外边距
   */
  'margin-right': any;
  /**
   * 设置元素的上外边距
   */
  'margin-top': any;

  /*-------------- padding( 填充 ) --------------*/

  /**
   * 使用简写属性设置在一个声明中的所有填充属性
   */
  padding: any;
  /**
   * 设置元素的底部填充
   */
  'padding-bottom': any;
  /**
   * 设置元素的左部填充
   */
  'padding-left': any;
  /**
   * 设置元素的右部填充
   */
  'padding-right': any;
  /**
   * 设置元素的顶部填充
   */
  'padding-top': any;

  /*-------------- Dimension( 尺寸 ) --------------*/

  /**
   * 设置元素的高度
   */
  height: any;
  /**
   * 设置行高
   */
  'line-height': any;
  /**
   * 设置元素的最大高度
   */
  'max-height': any;
  /**
   * 设置元素的最大宽度
   */
  'max-width': any;
  /**
   * 设置元素的最小高度
   */
  'min-height': any;
  /**
   * 设置元素的最小宽度
   */
  'min-width': any;
  /**
   * 设置元素的宽度
   */
  width: any;

  /*-------------- Display( 显示 ) --------------*/

  /**
   * 显示
   * block ：显示
   * none ：隐藏
   */
  display: any;
  /**
   * 可见性
   * 
   * hidden ：隐藏
   */
  visibility: any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;
  /**
   * 
   */
  '': any;







  /**
   * 宽
   */
  width: any;

  /** 尺寸 end */

  /** 间距 start */


  /** 间距 end */

  /** 位置 start */
  /** 位置 end */

  /**
   * 
   */
  display: any;
  /**
   * 
   */
  top: any;
  /**
   * 
   */
  left: any;
  /**
   * 
   */
  bottom: any;
  /**
   * 
   */
  transition: any;
  /**
   * 
   */
  transform: any;
  /**
   * 
   */
  visibility: any
  /**
   * 透明度
   */
  opacity: any;


  /** 尺寸 start */
  /** 尺寸 end */
}
