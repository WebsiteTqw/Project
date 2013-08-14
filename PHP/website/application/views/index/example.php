<p>
    <a href="view-source:<?php echo site_url('', true); ?>" target="_blank">敲我查看源代码</a>
</p>
消耗时间：{elapsed_time}s
<br />
消耗内存：{memory_usage}



<pre>
    <code>

名称为key1的session：<?php echo $sess['key1']; ?>
<br />
名称为key2的session：<?php echo $sess['key2']; ?>

<br />
所有的session：
<?php var_export($sess_all); ?>

包括index.php的相对路径：<a href="<?php echo site_url('index/index'); ?>" target="_blank"><?php echo site_url('index/index'); ?></a>
<br />
包括index.php的绝对路径：<?php echo site_url('index/index', true); ?>
<br />
不包括index.php的相对路径：<a href="<?php echo base_url('assets/'); ?>" target="_blank"><?php echo base_url('assets/'); ?></a>
<br />
不包括index.php的绝对路径：<?php echo base_url('assets/', true); ?>
<br />

生成相对路径内部js标签：<?php echo html_escape(link_js('common.js')); ?>
<br />
生成绝对路径内部js标签：<?php echo html_escape(link_js('common.js', true)); ?>
<br />
生成相对路径内部css标签：<?php echo html_escape(link_css('main.css')); ?>
<br />
生成绝对路径内部css标签：<?php echo html_escape(link_css('main.css', true)); ?>
<br />
生成外部js标签：<a href="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js" target="_blank"><?php echo html_escape(link_js('//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js')); ?></a>
<br />
生成外部css标签：<a href="//example.com/main.css" target="_blank"><?php echo html_escape(link_css('//example.com/main.css')); ?></a>



    </code>
</pre>


